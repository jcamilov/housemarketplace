![](https://github.com/jcamilov/housemarketplace/blob/master/public/houseMarketplaceLogo.png?raw=true)

See it in action: **https://www.youtube.com/watch?v=RhUoc0kcQZU**
Give it a try: **https://perfectsize.netlify.app/**

(this is by no means a finished product but a work in progress as I am adding new features and looking for ways to optimize performance)

------------

### About this project
**The problem** 
Appareal retailers face up to 30% of returns causing a big impact on business revenue as well as environmental negative effects. Nearly half of the returns are related with sizing issues[1][2]. This problem grew due to the increment in ecommerce transations during and after COVID-19.

I decided to implement a tool that might help reduce such negative impact by allowing users to get a size recommendation according to his/her specific body measuremnts matched with the item measuremnts (which btw changes from brand to brand). It is intended for online stores.

### Notes
- All the processing is done in the user's device so no video or images are stored in any cloud. 
- By now it has been only tested on desktop.
- Performance depends on the user's device but the loading time in a computer with core i3 processor, 8GB RAM takes about 5 seconds. This is a decent time that can be hidden if the model is loaded on page start (not done this way so far).

### Features to implement
- Face bluring. Although no personal information is stored
- Fine tune position recognition to make it more robust a different angles of the camera.
- Testing in mobile devices.



------------

### Main development points
- ReactJS App
- It uses mediapipe as the AI tool to get a body mask
- Deployed in netlify
