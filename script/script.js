document.addEventListener('DOMContentLoaded', () => {
    console.log("Codeit Linktree: VBA Code Repository 로드 완료.");

    const linkItems = document.querySelectorAll('.link-item');
    linkItems.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(`${e.target.innerText} 상세 페이지로 이동합니다.`);
        });
    });
});