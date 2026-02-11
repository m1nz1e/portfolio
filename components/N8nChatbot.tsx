
import React, { useEffect } from 'react';

const N8nChatbot: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/chat.bundle.es.js';
    script.onload = () => {
      // @ts-ignore
      if (window.createChat) {
        // @ts-ignore
        window.createChat({
          webhookUrl: 'https://n8n1.m1nz.org/webhook/b51161bb-fc25-489c-a7d1-1e017c14980d/chat',
          target: '#n8n-chat'
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      const container = document.getElementById('n8n-chat');
      if (container) container.innerHTML = '';
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="n8n-chat"></div>;
};

export default N8nChatbot;
