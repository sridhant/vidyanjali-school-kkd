

  console.log( window.innerHeight  + 'height' )
  console.log( window.innerWidth  + 'width')

  // const tl = new TimelineLite()

  // tl.fromTo('#homeSvg' , 5 , {
  //   opacity : 0,
  //   ease : Power3.easeOut,
  // })

  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#aboutSvg" , {
    ScrollTrigger : {
      trigger : "#aboutSvg",
      start : "top center",
      markers : true,
      toggleActions : "restart pause reverse pause",
    }
  },{
    x : 500,
    duration : 3
  })

//   tl.to('#aboutSvg' , {
//     ScrollTrigger : {
//       trigger : '#aboutSvg',
//     }
// } , {
//  x : 400,
//  duration : 3,
// })




