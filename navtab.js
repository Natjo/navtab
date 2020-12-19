const navtab = el => {
	const btns = el.querySelectorAll('.summary');
	const open = sel => {
		btns.forEach(btn => btn.setAttribute('aria-expanded', sel === btn ? true : false));
	}
	btns.forEach(btn => btn.onclick = () => open(btn));
}
export default navtab;