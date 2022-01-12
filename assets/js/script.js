$(document).ready(function () {
  // lazy Load (start)
  let lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });
  // lazy Load (end)

  // mask (start)
  jQuery(function ($) {
    $(".phone-input").mask("+7 (999) 999-9999");
  });
  // mask (end)

  // Лёгкий ход для якорей
  $("a.ancLinks").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("html,body").animate({ scrollTop: destination }, 1100);
    return false;
  });
  // /Лёгкий ход для якорей

  // let audio = document.querySelector('.item-audio__timeline audio')
  // $('.item-audio__btn-play').click(function () {
  //   audio.play();
  // })

  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 

  // const audioPlayer = document.querySelector(".audio-player");
  // const audio = new Audio(
  //   "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
  // );
  // //credit for song: Adrian kreativaweb@gmail.com

  // console.dir(audio);
  // console.log(audio);

  // audio.addEventListener("loadeddata", () => {
  //   audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(audio.duration);
  //   audio.volume = .75;
  // },
  //   false
  // );

  // //click on timeline to skip around
  // const timeline = audioPlayer.querySelector(".timeline");
  // timeline.addEventListener("click", e => {
  //   const timelineWidth = window.getComputedStyle(timeline).width;
  //   const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  //   audio.currentTime = timeToSeek;
  // }, false);

  // //click volume slider to change volume
  // const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
  // volumeSlider.addEventListener('click', e => {
  //   const sliderWidth = window.getComputedStyle(volumeSlider).width;
  //   const newVolume = e.offsetX / parseInt(sliderWidth);
  //   audio.volume = newVolume;
  //   audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
  // }, false)

  // //check audio percentage and update time accordingly
  // setInterval(() => {
  //   const progressBar = audioPlayer.querySelector(".progress");
  //   progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  //   audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
  //     audio.currentTime
  //   );
  // }, 500);

  // //toggle between playing and pausing on button click
  // const playBtn = audioPlayer.querySelector(".controls .toggle-play");
  // playBtn.addEventListener(
  //   "click",
  //   () => {
  //     if (audio.paused) {
  //       playBtn.classList.remove("play");
  //       playBtn.classList.add("pause");
  //       audio.play();
  //     } else {
  //       playBtn.classList.remove("pause");
  //       playBtn.classList.add("play");
  //       audio.pause();
  //     }
  //   },
  //   false
  // );

  // audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  //   const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  //   audio.muted = !audio.muted;
  //   if (audio.muted) {
  //     volumeEl.classList.remove("icono-volumeMedium");
  //     volumeEl.classList.add("icono-volumeMute");
  //   } else {
  //     volumeEl.classList.add("icono-volumeMedium");
  //     volumeEl.classList.remove("icono-volumeMute");
  //   }
  // });

  // //turn 128 seconds into 2:08
  // function getTimeCodeFromNum(num) {
  //   let seconds = parseInt(num);
  //   let minutes = parseInt(seconds / 60);
  //   seconds -= minutes * 60;
  //   const hours = parseInt(minutes / 60);
  //   minutes -= hours * 60;

  //   if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  //   return `${String(hours).padStart(2, 0)}:${minutes}:${String(
  //     seconds % 60
  //   ).padStart(2, 0)}`;
  // }

  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 

  // Slick slider - movie-roles-slider (start)
  $(".movie-roles-slider").slick({
    autoplay: true,
    autoplaySpeed: 12000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // centerMode: true,
    variableWidth: true,
    prevArrow: '<button class="prev movie-roles-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="42" height="42" x="0" y="0" viewBox="0 0 792.033 792.033" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><path d="M617.858,370.896L221.513,9.705c-13.006-12.94-34.099-12.94-47.105,0c-13.006,12.939-13.006,33.934,0,46.874     l372.447,339.438L174.441,735.454c-13.006,12.94-13.006,33.935,0,46.874s34.099,12.939,47.104,0l396.346-361.191     c6.932-6.898,9.904-16.043,9.441-25.087C627.763,386.972,624.792,377.828,617.858,370.896z" fill="#ffffff" data-original="#000000" style=""/></svg></button>',
    nextArrow: '<button class="next movie-roles-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="42" height="42" x="0" y="0" viewBox="0 0 792.033 792.033" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><path d="M617.858,370.896L221.513,9.705c-13.006-12.94-34.099-12.94-47.105,0c-13.006,12.939-13.006,33.934,0,46.874     l372.447,339.438L174.441,735.454c-13.006,12.94-13.006,33.935,0,46.874s34.099,12.939,47.104,0l396.346-361.191     c6.932-6.898,9.904-16.043,9.441-25.087C627.763,386.972,624.792,377.828,617.858,370.896z" fill="#ffffff" data-original="#000000" style=""/></svg></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // /Slick slider - movie-roles-slider (end)

  // Slick slider - www-slider (start)
  $(".www-slider").slick({
    autoplay: true,
    autoplaySpeed: 700000000,
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button class="prev www-arrow">1</button>',
    nextArrow: '<button class="next www-arrow">2</button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // /Slick slider - www-slider (end)
});
