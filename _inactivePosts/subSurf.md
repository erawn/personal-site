---
title: 'Realtime Subsurface Scattering with OpenGL'
excerpt: ''
coverImage: '/assets/blog/work/subsurf/Screen+Shot+2019-03-19+at+10.41.04+PM.png'
date: '2020-03-16T05:35:07.322Z'
prettyDate: "Spring 2018"
type: 'work'
ogImage:
  url: '/assets/blog/work/subsurf/Screen+Shot+2019-03-19+at+10.41.04+PM.png'
---

#### (RIGHT: A PHONG MODEL WITH NORMAL MAPPING. LEFT: SIMULATED SUBSURFACE SCATTERING, KELEMEN/SZIRMAY-KALOS SPECULARITY WITH NORMAL MAPPING)

This project explores a well established method for real-time subsurface scattering on skin. The material is rendered with a Kelemen/Szirmay-Kalos Specular BRDF. The methods I implemented are described in GPU Gems 3 in the Chapter "Advanced Techniques for RealisticReal-Time Skin Rendering" by Eugene d’Eon and David Luebke. 

![](/assets/blog/work/subsurf/spec.png)

First, the BRDF Implemented (Kelemen/Szirmay-Kalos) provides a more physically plausible model for specularity than the Phong Model. We start by computing a Fresnel term which allows us to account for reflection at near-grazing angles. We plug in the measured reflectance at normal incidence parameter for skin and use the Schlick Approximation to obtain a Fresnel term that is fast to compute and works well-enough for our applications.

![](/assets/blog/work/subsurf/fresnel.png)

Next we compute a Beckmann Distribution for the BRDF. The Beckmann Distribution allows us to incorporate a roughness term into our calculation. This parameter can be given as a texture to vary over a face, but for our purposes the parameter is a single value. Beckmann roughness (parameter ’m’) models the distribution of microfacets on a surface, so that as a surface becomes rough, the specular light will distribute more diffusely.

![](/assets/blog/work/subsurf/beckmann.png)

Next, we move to implementing Subsurface Scattering in realtime. Briefly, the underlying theory behind how we will model subsurface scattering is based on diffusion profiles, or how much red, green, or blue light will scatter when shone onto a given material. Established research gives plenty of data for the diffusion profile of human skin. While scattering is highly related to frequency, for our purposes we’ll approximate with RGB distributions because we’ll be working with RGB color space in OpenGL. To approximate the multipole models which are required to accurately simulate the scattering between multiple layers of skin (unlike relatively uniform materials like milk), we use a sum of gaussians approach to approximate the diffusion profile. Because light scatters so completely in skin, it is sufficient to track only the irradiance on each point, rather than the direction (which is accounted for in the specular reflection which models the oily layer on top of the skin). This means that we render only irradiance into textures, or total light which ends up at a point on the surface, regardless of direction. Therefore, our algorithm is such:

1. Compute irradiance textures in an off-screen buffer

2. Blur the irradiance textures according to our diffusion profile approximation.

3. In our final shader pass, get a weighted sum of samples from all irradiance textures.

We use a seperable gaussian filter in the final shader to compute the value of each blurred texture at each fragment.

![](/assets/blog/work/subsurf/Screen+Shot+2019-03-17+at+11.08.00+PM.png)
![](/assets/blog/work/subsurf/Screen+Shot+2019-03-17+at+11.08.18+PM.png)


