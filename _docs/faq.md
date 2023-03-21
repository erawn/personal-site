---
title: 'faq'
---
### Participating in Research

Quickpose is an ongoing research project that you can participate in! If you'd like to send anonymous usage data to help our research, you can opt-in at the pop-up screen when you open Quickpose (you can set a default preference if you don't want to go through this pop-up on every new project). At any time you can opt-in or opt-out in the settings for the project (Menu->Preferences->Send Usage Data). For more information, please look at the [consent form for research](https://github.com/erawn/Quickpose/files/11023935/Quickpose_Informed_Consent.pdf). If you have any questions, you can always email me at erawn 'at' berkeley 'dot' edu. 

### What information is collected about me?

If you don't opt-in to research, I won't collect any data about your project. There is a google analytics tag on the website so I can get a rough estimate of how often Quickpose is being used (this can be disabled with an ad-blocker, if you wish), but this is the only data I recieve if you use Quickpose without opting into research. If you do participate in research, I'll collect anonymous data about your usage (you can look at the logs in each quickpose project, in the "archive" folder. The ones sent to the analytics server are called "UsageLogs.log"). I won't send any information about the content of your projects (programs, outputs, what you write in the canvas, etc), I'll only collect metadata about those events that isn't personally identifiable, like how often you fork, or the number of edits you made to a version before forking. Detailed information is in the consent form linked above. 

### Are my files remotely stored anywhere?

Nope! The web browser interface is simply a convenient way to serve a front-end app. All of your files are stored in the **/Quickpose/** folder inside each of your sketches. Quickpose stores everything in a human-readable, uncompressed format to support Processing artists building their own tools or automation scripts on top of Quickpose (I'd love to see what you make if you do!) and also to give transparency about what data is being recorded locally. For a complete look at how Quickpose stores information, take a look at [the full writeup on Github](https://github.com/erawn/Quickpose/wiki/What-happens-when-you-run-Quickpose-on-a-Processing-Project)

**Although Quickpose is a version control system, it is not a remote backup.** You should still make regular backups of your projects in case of a loss of files. This should be pretty easy though, as everything is contained locally in your sketch folder under the **/Quickpose/** directory.

### What should I do if I run into a bug?

Please open an [issue on Github](https://github.com/erawn/Quickpose/issues) with a complete description, and upload your Quickpose folder if you're able. Apologies if there's a delay in addressing bugs - I'm just a single grad student */cry*. 

### I want to use Quickpose for teaching/research/something else cool!

That would make me so happy! If you want to talk over your specific ideas/needs, or are interested in a potential collaboration, please send me a message at erawn (at) berkeley (dot) edu and we can setup a time to chat! 

If you end up doing something cool with Quickpose, I'd love to hear about it too! 