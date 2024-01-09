import "./style.css";
import { gsap } from "gsap";

// GSAPのタイムラインを初期化
var tl = gsap.timeline({ paused: true });

// タイムラインにアニメーションを追加
tl.to(".popup-background", {
  position: "fixed",
  zIndex: "200",
  width: "100%",
  height: "100%",
})
  .from(".popup-background", { opacity: 0 }, ">")
  .to(".popup-background__img", { position: "fixed", zIndex: "300" }, ">")
  .from(".popup-background__img", { opacity: 0, y: 10 });

export class PopupManager {
  constructor(numberOfPopups) {
    this.numberOfPopups = numberOfPopups;
    this.setupPopups();
    this.setupBackgroundClick();
  }

  setupPopups() {
    for (let i = 1; i <= this.numberOfPopups; i++) {
      this.setupPopup(".popup-trigger-" + i, ".popup-image-container-" + i);
    }
  }

  setupPopup(triggerClass, imageContainerSelector) {
    let popupElements = Array.from(document.querySelectorAll(triggerClass));
    let currentIndex = 0;

    popupElements.forEach((element, index) => {
      element.addEventListener("click", () => {
        let src = element.getAttribute("src");
        let imageContainer = document.querySelector(imageContainerSelector);
        if (imageContainer) {
          imageContainer.setAttribute("src", src);
          currentIndex = index;
        }
        tl.restart();
      });
    });

    let imageContainer = document.querySelector(imageContainerSelector);
    if (imageContainer) {
      imageContainer.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % popupElements.length;
        let nextSrc = popupElements[currentIndex].getAttribute("src");
        imageContainer.setAttribute("src", nextSrc);
      });
    }
  }

  setupBackgroundClick() {
    // 共通のイベント処理を関数として定義
    const handleBackgroundClick = () => {
      tl.reverse();
      tl.eventCallback("onReverseComplete", () => {
        for (let i = 1; i <= this.numberOfPopups; i++) {
          document
            .querySelectorAll(".popup-image-container-" + i)
            .forEach((img) => {
              img.removeAttribute("src");
            });
        }
      });
    };

    // .popup-backgroundにイベントリスナーを追加
    document
      .querySelector(".popup-background")
      .addEventListener("click", handleBackgroundClick);

    // .circle-xにも同じイベントリスナーを追加
    document
      .querySelectorAll(".circle-x")
      .forEach((element) =>
        element.addEventListener("click", handleBackgroundClick)
      );
  }
}

// 使用例
// new PopupManager(5); // 5はポップアップの数
