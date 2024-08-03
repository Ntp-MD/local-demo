
/*
document.addEventListener("DOMContentLoaded", async () => {
    document.querySelectorAll('html *').forEach(async (element) => {
        const filePath = `https://ntp-md.github.io/local-demo/component/${element.id}.html`;
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error('Failed to fetch');
            element.innerHTML = await response.text();
        } catch (error) {
            console.error('Missing path', error);
        }
    });
});
*/

document.addEventListener("DOMContentLoaded", async () => {
    document.querySelectorAll('html *').forEach(async (element) => {
        const filePath = `/component/${element.id}.html`;
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error('Failed to fetch');
            element.innerHTML = await response.text();
        } catch (error) {
            console.error('Missing path', error);
        }
    });
});