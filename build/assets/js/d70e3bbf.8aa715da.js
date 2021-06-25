(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[56902],{22242:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return l},metadata:function(){return r},toc:function(){return p},default:function(){return h}});var n=o(22122),a=o(19756),i=(o(67294),o(3905)),l={sidebar_label:"Live Reload"},r={unversionedId:"vue/your-first-app/live-reload",id:"vue/your-first-app/live-reload",isDocsHomePage:!1,title:"Rapid App Development with Live Reload",description:"So far, we\u2019ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?",source:"@site/docs/vue/your-first-app/7-live-reload.md",sourceDirName:"vue/your-first-app",slug:"/vue/your-first-app/live-reload",permalink:"/docs/vue/your-first-app/live-reload",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/vue/your-first-app/7-live-reload.md",version:"current",sidebar_label:"Live Reload",sidebarPosition:7,frontMatter:{sidebar_label:"Live Reload"},sidebar:"docs",previous:{title:"Deploying to iOS and Android",permalink:"/docs/vue/your-first-app/deploying-mobile"},next:{title:"Vue Lifecycle",permalink:"/docs/vue/lifecycle"}},p=[{value:"Live Reload",id:"live-reload",children:[]},{value:"Deleting Photos",id:"deleting-photos",children:[]},{value:"What\u2019s Next?",id:"whats-next",children:[]}],s={toc:p};function h(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far, we\u2019ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?"),(0,i.kt)("p",null,"We can use the Ionic CLI\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"Live Reload functionality")," to boost our productivity when building Ionic apps. When active, Live Reload will reload the browser and/or WebView when changes in the app are detected."),(0,i.kt)("h2",{id:"live-reload"},"Live Reload"),(0,i.kt)("p",null,"Remember ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic serve"),"? That was Live Reload working in the browser, allowing us to iterate quickly."),(0,i.kt)("p",null,"We can also use it when developing on iOS and Android devices. This is particularly useful when writing code that interacts with native plugins. Since we need to run native plugin code on a device in order to verify that it works, having a way to quickly write code, build and deploy it, then test it is crucial to keeping up our development speed."),(0,i.kt)("p",null,"Let\u2019s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap run ios -l --external\n\n$ ionic cap run android -l --external\n")),(0,i.kt)("p",null,"The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device."),(0,i.kt)("h2",{id:"deleting-photos"},"Deleting Photos"),(0,i.kt)("p",null,"With Live Reload running and the app is open on your device, let\u2019s implement photo deletion functionality. Open ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab2.vue")," then import the ",(0,i.kt)("inlineCode",{parentName:"p"},"actionSheetController"),". We'll display an ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/action-sheet"},"IonActionSheet")," with the option to delete a photo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { actionSheetController, IonPage, IonHeader, IonFab, IonFabButton,\n         IonIcon, IonToolbar, IonTitle, IonContent, IonImg, IonGrid,\n         IonRow, IonCol } from '@ionic/vue';\n// other imports\n")),(0,i.kt)("p",null,"Next, reference the ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePhoto")," function, which we'll create soon:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"setup() {}\n  const { photos, takePhoto, deletePhoto } = usePhotoGallery();\n}\n")),(0,i.kt)("p",null,"When a user clicks/taps on an image, we will show the action sheet. Add a click handler to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-img>")," element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>\n')),(0,i.kt)("p",null,"Next, within ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()"),", call the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," function to open a dialog with the option to either delete the selected photo or cancel (close) the dialog:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const showActionSheet = async (photo: Photo) => {\n  const actionSheet = await actionSheetController.create({\n    header: 'Photos',\n    buttons: [{\n      text: 'Delete',\n      role: 'destructive',\n      icon: trash,\n      handler: () => {\n        deletePhoto(photo);\n    }}, {\n      text: 'Cancel',\n      icon: close,\n      role: 'cancel',\n      handler: () => {\n        // Nothing to do, action sheet is automatically closed\n      }\n    }]\n  });\n  await actionSheet.present();\n}\n")),(0,i.kt)("p",null,"Next, return the ",(0,i.kt)("inlineCode",{parentName:"p"},"showActionSheet")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return {\n  photos,\n  takePhoto,\n  showActionSheet,\n  camera, trash, close\n}\n")),(0,i.kt)("p",null,"Next, we need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePhoto")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"usePhotoGallery")," function. Open the file then add:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const deletePhoto = async (photo: Photo) => {\n  // Remove this photo from the Photos reference data array\n  photos.value = photos.value.filter(p => p.filepath !== photo.filepath);\n\n  // delete photo file from filesystem\n  const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);\n  await Filesystem.deleteFile({\n    path: filename,\n    directory: Directory.Data\n  });\n};\n")),(0,i.kt)("p",null,"The selected photo is removed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"photos")," array first, then we delete the photo file using the Filesystem API."),(0,i.kt)("p",null,"Remember that removing the photo from the ",(0,i.kt)("inlineCode",{parentName:"p"},"photos")," array triggers the ",(0,i.kt)("inlineCode",{parentName:"p"},"cachePhotos")," function for us automatically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const cachePhotos = () => {\n  Storage.set({\n    key: PHOTO_STORAGE,\n    value: JSON.stringify(photos.value)\n  });\n}\n\nwatch(photos, cachePhotos);\n")),(0,i.kt)("p",null,"Finally, return the ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePhoto")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return {\n  photos,\n  takePhoto,\n  deletePhoto\n};\n")),(0,i.kt)("p",null,'Save this file, then tap on a photo again and choose the "Delete" option. This time, the photo is deleted! Implemented much faster using Live Reload. \ud83d\udcaa'),(0,i.kt)("h2",{id:"whats-next"},"What\u2019s Next?"),(0,i.kt)("p",null,"Congratulations! You created a complete cross-platform Photo Gallery app that runs on the web, iOS, and Android."),(0,i.kt)("p",null,"There are many paths to follow from here. Try adding another ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/components"},"Ionic UI component")," to the app, or more ",(0,i.kt)("a",{parentName:"p",href:"https://capacitor.ionicframework.com/docs/apis"},"native functionality"),". The sky\u2019s the limit."),(0,i.kt)("p",null,"Happy app building! \ud83d\udc99"))}h.isMDXComponent=!0}}]);