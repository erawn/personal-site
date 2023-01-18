---
title: 'basics'
---

Quickpose is pretty simple to use! 

### Left Click to Change Versions


![](/assets/quickpose/switching.gif)



### Shift-Click to Fork a Version

| ![](/assets/quickpose/forking.gif) | (Once you fork, the original will be locked for editing to maintain a linear edit history. Just make another fork when you want to edit again!)  | 
|:---|:---|

### Annotate, Arrange, Style

| Quickpose is built on a fully featured canvas editor, so you can add stickies, images, colors, arrows, shapes, and more: | <img src="/assets/quickpose/annotationWeb.png" style="width:600px;"> | 
|:---|:---|


### Live Thumbnails

Quickpose will automatically use whatever is called **Render.png** in your sketch folder for the current thumbnail. You can generate this however you want - the starter code provides a place to start:

```java
  if(frameCount % 20 == 0){
    save("render.png"); 
  }
``` 

### Settings

| There are two settings to know about right away: first, you can toggle **Autorun Sketch** to automatically re-run your Processing sketch when you switch versions. Below that, **Pause Simulation** will stop the force simulation that pushes the versions around. If anything glitchy happens, turning this on should let you keep working.  | <img src="/assets/quickpose/menus.png" style="width:800px;"> | 
|:---|:---|

