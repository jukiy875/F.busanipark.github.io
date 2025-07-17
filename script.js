
const message = "붉은 장갑/노트를 찾으셨군요! 스태프 통해서 잘 전달 받았습니다. 덕분에 경기를 무사히 치를 수 있을 것 같아요. 정말 감사합니다. 작은 사례를 하고 싶은데, '한여름 밤의 레드파크' 슬로건이 걸려있는 부스에 선물을 맡겨 놓을게요.";
let index = 0;
const speed = 60;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("message").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
