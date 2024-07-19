// Adiciona um evento de clique ao botão de criptografar
document.getElementById('encrypt-button').addEventListener('click', () => {
    // Obtém o texto de entrada do usuário
    const inputText = document.getElementById('input-text').value;
    // Área onde o texto de saída será exibido
    const outputArea = document.getElementById('output-area');
    // Mensagem padrão exibida quando não há texto de entrada
    const defaultMessage = document.querySelector('.default-message');
    // Mensagem de saída onde o texto criptografado será exibido
    const outputMessage = document.querySelector('.output-message');
    
    // Verifica se há texto de entrada
    if (inputText) {
        // Criptografa o texto de entrada usando Base64
        const encryptedText = btoa(inputText);
        // Esconde a mensagem padrão
        defaultMessage.style.display = 'none';
        // Exibe a mensagem de saída
        outputMessage.style.display = 'block';
        // Define o conteúdo da mensagem de saída como o texto criptografado
        outputMessage.textContent = encryptedText;
    } else {
        // Se não houver texto de entrada, exibe a mensagem padrão e esconde a mensagem de saída
        defaultMessage.style.display = 'block';
        outputMessage.style.display = 'none';
    }
});

// Adiciona um evento de clique ao botão de descriptografar
document.getElementById('decrypt-button').addEventListener('click', () => {
    // Obtém o texto de entrada do usuário
    const inputText = document.getElementById('input-text').value;
    // Área onde o texto de saída será exibido
    const outputArea = document.getElementById('output-area');
    // Mensagem padrão exibida quando não há texto de entrada
    const defaultMessage = document.querySelector('.default-message');
    // Mensagem de saída onde o texto descriptografado será exibido
    const outputMessage = document.querySelector('.output-message');
    
    // Verifica se há texto de entrada
    if (inputText) {
        try {
            // Descriptografa o texto de entrada usando Base64
            const decryptedText = atob(inputText);
            // Esconde a mensagem padrão
            defaultMessage.style.display = 'none';
            // Exibe a mensagem de saída
            outputMessage.style.display = 'block';
            // Define o conteúdo da mensagem de saída como o texto descriptografado
            outputMessage.textContent = decryptedText;
        } catch (error) {
            // Se ocorrer um erro durante a descriptografia, exibe um alerta
            alert('Texto inválido para descriptografar.');
        }
    } else {
        // Se não houver texto de entrada, exibe a mensagem padrão e esconde a mensagem de saída
        defaultMessage.style.display = 'block';
        outputMessage.style.display = 'none';
    }
});

// Adiciona um evento de clique ao botão de resetar
document.getElementById('reset-button').addEventListener('click', () => {
    // Área onde o texto de saída será exibido
    const outputArea = document.getElementById('output-area');
    // Mensagem padrão exibida quando não há texto de entrada
    const defaultMessage = document.querySelector('.default-message');
    // Mensagem de saída onde o texto será exibido
    const outputMessage = document.querySelector('.output-message');
    
    // Limpa o campo de texto de entrada
    document.getElementById('input-text').value = '';
    // Exibe a mensagem padrão
    defaultMessage.style.display = 'block';
    // Esconde a mensagem de saída
    outputMessage.style.display = 'none';
    // Redefine o conteúdo da mensagem de saída
    outputMessage.textContent = 'Digite um texto que você deseja criptografar ou descriptografar.';
});

// Adiciona um evento de input ao campo de texto de entrada
document.getElementById('input-text').addEventListener('input', () => {
    // Obtém o texto de entrada do usuário
    const inputText = document.getElementById('input-text').value;
    // Mensagem padrão exibida quando não há texto de entrada
    const defaultMessage = document.querySelector('.default-message');
    // Mensagem de saída onde o texto será exibido
    const outputMessage = document.querySelector('.output-message');

    // Verifica se o campo de texto de entrada está vazio
    if (inputText === '') {
        // Se o campo estiver vazio, exibe a mensagem padrão e esconde a mensagem de saída
        defaultMessage.style.display = 'block';
        outputMessage.style.display = 'none';
    } else {
        // Se houver texto no campo, esconde a mensagem padrão e exibe a mensagem de saída
        defaultMessage.style.display = 'none';
        outputMessage.style.display = 'block';
    }
});
