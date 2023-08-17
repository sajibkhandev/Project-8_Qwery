tailwind.config = {
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('./images/banner.png')",
        contact: "url('./images/contact.jpg')",
      },
      colors: {
        yel: "#FFC178",
        butt: "#FFA343",
      },
      letterSpacing: {
        six: "6px",
        one: "1px",
      },
      fontSize: {
        size64: "64px",
        size43:"43px"
      },
      animation: {
        animateButton: "animateButton 2s infinite",
        animateImg1: "animateImg1 5s infinite",
        animateImg2: "animateImg2 5s infinite"

      },
      // keyframes:{
      //   animateButton:{
      //     from:{
      //       color:"red"
      //     },
      //     to:{
      //       color:"blue"

      //     }
      //   }

      // },

      keyframes:{
        animateImg1:{
          from:{
            width: "50%"
          },to:{
            width: "70%"

          }

        }
      },
      // keyframes:{
      //   animateImg2:{
      //     from:{
      //       transform:"translateY(-10%)"
      //     },to:{
      //       transform: "translateY(0%)"
      //     }
      //   }
      // }
     
    },
  },
};
