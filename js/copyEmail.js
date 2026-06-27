const emailBtn = document.getElementById("copyEmailBtn");

if (emailBtn) {
    emailBtn.addEventListener("click", async () => {
        const email = "rudradhirendrakumarpatel@gmail.com";

        try {
            await navigator.clipboard.writeText(email);

            const originalText = emailBtn.textContent;
            emailBtn.textContent = "✓ Email Copied!";

            setTimeout(() => {
                emailBtn.textContent = originalText;
            }, 2000);

        } catch (err) {
            alert("Failed to copy email.");
        }
    });
}