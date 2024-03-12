   function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      const size = Math.random() * 100 + 20;
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';

      // 記錄泡泡的初始位置
      const initialX = Math.random() * (window.innerWidth - size);
      const initialY = Math.random() * (window.innerHeight - size);

      // 設置泡泡的初始位置
      bubble.style.left = initialX + 'px';
      bubble.style.top = initialY + 'px';
      document.body.appendChild(bubble);

      bubble.addEventListener('animationend', () => {
        // 當泡泡消失動畫結束時，移除泡泡元素
        bubble.remove();

        // 再次創建新的泡泡並設置隨機位置
        const newX = Math.random() * (window.innerWidth - size);
        const newY = Math.random() * (window.innerHeight - size);
        bubble.style.left = newX + 'px';
        bubble.style.top = newY + 'px';
        document.body.appendChild(bubble);
      });
    }

    for (let i = 0; i < 24; i++) {
      createBubble();
    }