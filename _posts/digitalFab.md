---
title: 'Digital Fabrication Methods For Creative Illumination'
excerpt: ''
coverImage: '/assets/blog/work/digitalfab/Picture1.png'
date: '2020-03-16T05:35:07.322Z'
prettyDate: "Spring 2020"
type: 'work'
ogImage:
  url: '/assets/blog/work/digitalfab/Picture1.png'
---
## Introduction

This project was an exploration into new methods to color and refract light with acrylic, color gel, and SLA printed clear resin. Using Processing and Blender, we worked towards visualizing and designing for light passing through materials designed computationally. Our approach with layered sheets of colored acrylic allows for uniform slides to produce color mixing without a noticeable reduction in brightness or dramatic artifacts. We also use SLA clear resin heightmaps to produce compelling caustic and scattering effects. 

## Related Work

Our inspiration for this project was Illumination Aesthetics[^1], which used SLA and PLA 3D printing, frosted acrylic, and other diffusion techniques to create luminaires which could be visualised and designed computationally. Torres et al encourage light to be seen as material in personal manufacturing, a material which can be designed for in a targeted and creative way. Illumination Aesthetics discusses the unique process of working with both physical and digital tools as a “hybrid practice”, positioning the LED as a meaningful intersection of physical and digital design practices, manufacturing processes, and aesthetic. 

In line with Illumination Aesthetics, we believe designing methods which produce more organic aesthetics, widen the design space for 3D printed and laser cut materials in luminaires, and fit well into a hybrid practice are a meaningful contribution to creative personal manufacturing. In addition, we hope our exploration reveals possible new research questions to be further explored. 

## Grid Based Sampling for Multi-Colored Acrylic Diffusion 

To allow for multiple colors, a suitable method needs to completely cut through sections to allow for white light to reach the second and third layers. Thus, we divide an acrylic slide into small cells, in the center of which a square is cut proportional to the percentage of a single color channel to the entire brightness over the cell. Thus, the algorithm is as follows: 

1. Divide target image into grid cells 

2. Over each cell: 

  - Sum the normalized contribution t of a single color channel c ∈ {r,g,b} 
      
    - For Each Pixel in Cell: 1. t = c / (r+g+b) 

3. Remap sum values from [0,1] to [0, ImageSize / # of Cells] 

4. Draw square in center of cell with size equal to our remapped sum values 

| ![First Image](/assets/blog/work/digitalfab/Screen+Shot+2019-10-07+at+1.40.41+AM.png) | ![Second Image](/assets/blog/work/digitalfab/Screen+Shot+2019-10-07+at+1.40.50+AM.png) | ![Third Image](/assets/blog/work/digitalfab/DSC_3541.jpeg)|
|:---:|:---:|:---:|
#### Right: Input image Center: The output of our algorithm Left: Acrylic Slide cut with the center pattern 

Using this technique, we can generate gradients which also allow for color mixing: 

| ![First Image](/assets/blog/work/digitalfab/DSC_3440.png) | ![Second Image](/assets/blog/work/digitalfab/DSC_3463.png) | ![Third Image](/assets/blog/work/digitalfab/DSC_3453.png)|
|:---:|:---:|:---:|

#### Right: Single Blue Acrylic Slide Cut with a linear gradient. Center: A red and blue acrylic slide combine in the center to form a purple. Left: Red, Green, and Blue acrylic slides combine to form a gradient with white in the center. 

Because all of these slides were cut to accommodate a 3” x 3” shadow box, the area required to produce color mixing is relatively large compared to the total size of the slide. As we can see on the right, the red, blue, and green struggle to mix well while the purple band in the center image is much clearer. 

## SLA Clear Resin Heightmaps 

Using an engineering guide from Formlabs on “Creating Camera Lenses with Stereolithography”[^2], we created two heightmaps which were clear enough to produce reliable caustic effects and artistic scattering. 

| ![First Image](/assets/blog/work/digitalfab/Screen+Shot+2019-06-09+at+10.52.43+PM.png) | ![Second Image](/assets/blog/work/digitalfab/Screen+Shot+2019-06-09+at+10.53.31+PM.png) | 
|:---:|:---:|

#### Right: Heightfield with a Voronoi Noise texture Left: Heightfield with a Perlin Noise texture. 

By sanding and polishing the finished prints, adding a final coating of resin, and putting the prints back into the UV oven for at least another hour, the clear resin heightfields transformed from cloudy and bumpy to remarkably clear: 

| ![First Image](/assets/blog/work/digitalfab/IMG_1334.jpeg) | ![Second Image](/assets/blog/work/digitalfab/DSC_3532.jpeg) | 
|:---:|:---:|

#### Right: Perlin Noise caustics projected onto a nearby wall Left: Voronoi Noise heightfield in front of a grid of LEDs

| ![First Image](/assets/blog/work/digitalfab/DSC_3486.png) | ![Second Image](/assets/blog/work/digitalfab/DSC_3496.png) | 
|:---:|:---:|

Using clear resin heightmaps for lighting design has great potential for designing unique effects for both projected and head-on viewing. Using more modern graphics techniques like photon mapping would allow for an iterative visualization and design process in a 3D engine. 

## Future Work 
Image processing for effective representation on a projection surface remains a challenge. Using image segmentation algorithms and image processing filters such as edge detection could yield images which look better when run through our acrylic sampling method. Ideally, the blur which happens from lighting the acrylic with an area light source such as a lightbulb could be accounted for in the design and the image could be processed to reduce blur as much as possible. Using image segmentation algorithms would allow major regions of solid color to be identified, creating more cohesive designs with better color mixing. We also map the color channels linearly to the size of the square we draw in each cell. With an adjustable mapping, mixing could be adjusted for specific situations or effects. 

## References 

[^1]: Cesar Torres, Jasper O’Leary, Molly Nicholas, Eric Paulos, “Illumination Aesthetics: Light as a Creative Material within Computational Design”. UC Berkeley, CHI 2017. 

[^2]: Formlabs, “Creating Camera Lenses with Stereolithography”, https://formlabs.com/blog/creating-camera-lenses-with-stereolithography/ 
