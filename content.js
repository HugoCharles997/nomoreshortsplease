function hideShorts() {
	const shortsElements = document.querySelectorAll(
		".style-scope.ytd-rich-section-renderer"
	);
	const shortsElementsWhenBrowsing = document.querySelectorAll(
		".style-scope.ytd-reel-shelf-renderer"
	);

	shortsElements.forEach((element) => {
		element.style.display = "none";
	});
	shortsElementsWhenBrowsing.forEach((element) => {
		element.style.display = "none";
	});
}

hideShorts();

const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });
