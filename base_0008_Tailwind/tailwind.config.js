/** @type {import('tailwindcss').Config} */

// 플러그인
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 색상추가
      colors: {
        container: {
          font: "#0081C9",
          modal: "#FFC93C",
          animation: "#B08BBB",
        },
      },

      // 키프레임 추가
      keyframes: {
        bounceStar: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-50%)" },
        },
        rotateStar: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
        },
      },

      // 애니메이션 추가
      animation: {
        bounceStar: "bounceStar 1s linear infinite",
        rotateStar: "rotateStar 1s ease-out infinite",
      },
    },

    // 폰트추가
    fontFamily: {
      JuaRegular: "JuaRegular",
      DoHyeon: "Do Hyeon",
      Dokdo: "Dokdo",
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      // class 추가
      addComponents({
        ".animationBtn": {
          color: "white",
          background: "#E3ACF9",
          padding: 5,
          marginBottom: 20,
          marginLeft: 5,
          marginRight: 5,
        },
      });
    }),
  ],
};
