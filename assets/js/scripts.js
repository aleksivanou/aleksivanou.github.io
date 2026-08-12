document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.replace('nojs', 'js');
});

const root = document.documentElement;
const translations = {
	en: {
		themeLight: 'Enable light theme',
		themeDark: 'Enable dark theme',
		storyHide: 'Hide',
		storyMore: 'Show more',
		sending: 'Sending…',
		sent: 'Message sent. Thank you!',
		failed: "Couldn't send the message. Please try again.",
		languageLabel: 'Open English version',
		languageMessage: 'This page is also available in English.',
	},
	pl: {
		themeLight: 'Włącz jasny motyw',
		themeDark: 'Włącz ciemny motyw',
		storyHide: 'Ukryj',
		storyMore: 'Pokaż więcej',
		sending: 'Wysyłanie…',
		sent: 'Wiadomość została wysłana. Dziękuję!',
		failed: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.',
		languageLabel: 'Otwórz wersję polską',
		languageMessage: 'Ta strona jest również dostępna w języku polskim.',
	},
	ru: {
		themeLight: 'Включить светлую тему',
		themeDark: 'Включить тёмную тему',
		storyHide: 'Скрыть',
		storyMore: 'Показать ещё',
		sending: 'Отправка…',
		sent: 'Сообщение отправлено. Спасибо!',
		failed: 'Не удалось отправить сообщение. Попробуйте ещё раз.',
		languageLabel: 'Открыть русскую версию',
		languageMessage: 'Эта страница также доступна на русском языке.',
	},
	de: {
		themeLight: 'Helles Design aktivieren',
		themeDark: 'Dunkles Design aktivieren',
		storyHide: 'Ausblenden',
		storyMore: 'Mehr anzeigen',
		sending: 'Wird gesendet…',
		sent: 'Nachricht gesendet. Vielen Dank!',
		failed: 'Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.',
		languageLabel: 'Deutsche Version öffnen',
		languageMessage: 'Diese Seite ist auch auf Deutsch verfügbar.',
	},
	es: {
		themeLight: 'Activar tema claro',
		themeDark: 'Activar tema oscuro',
		storyHide: 'Ocultar',
		storyMore: 'Mostrar más',
		sending: 'Enviando…',
		sent: 'Mensaje enviado. ¡Gracias!',
		failed: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
		languageLabel: 'Abrir la versión en español',
		languageMessage: 'Esta página también está disponible en español.',
	},
	fr: {
		themeLight: 'Activer le thème clair',
		themeDark: 'Activer le thème sombre',
		storyHide: 'Masquer',
		storyMore: 'Afficher plus',
		sending: 'Envoi…',
		sent: 'Message envoyé. Merci !',
		failed: "Le message n'a pas pu être envoyé. Veuillez réessayer.",
		languageLabel: 'Ouvrir la version française',
		languageMessage: 'Cette page est également disponible en français.',
	},
	it: {
		themeLight: 'Attiva il tema chiaro',
		themeDark: 'Attiva il tema scuro',
		storyHide: 'Nascondi',
		storyMore: 'Mostra altro',
		sending: 'Invio in corso…',
		sent: 'Messaggio inviato. Grazie!',
		failed: 'Impossibile inviare il messaggio. Riprova.',
		languageLabel: 'Apri la versione italiana',
		languageMessage: 'Questa pagina è disponibile anche in italiano.',
	},
	pt: {
		themeLight: 'Ativar tema claro',
		themeDark: 'Ativar tema escuro',
		storyHide: 'Ocultar',
		storyMore: 'Mostrar mais',
		sending: 'A enviar…',
		sent: 'Mensagem enviada. Obrigado!',
		failed: 'Não foi possível enviar a mensagem. Tente novamente.',
		languageLabel: 'Abrir a versão em português',
		languageMessage: 'Esta página também está disponível em português.',
	},
	ja: {
		themeLight: 'ライトテーマを有効にする',
		themeDark: 'ダークテーマを有効にする',
		storyHide: '非表示',
		storyMore: 'もっと見る',
		sending: '送信中…',
		sent: 'メッセージを送信しました。ありがとうございます。',
		failed: 'メッセージを送信できませんでした。もう一度お試しください。',
		languageLabel: '日本語版を開く',
		languageMessage: 'このページは日本語でもご覧いただけます。',
	},
};
const languagePaths = {
	en: '/',
	pl: '/pl/',
	ru: '/ru/',
	de: '/de/',
	es: '/es/',
	fr: '/fr/',
	it: '/it/',
	pt: '/pt/',
	ja: '/ja/',
};
const requestedLanguage = (root.lang || '').toLowerCase().split('-')[0];
const pageLanguage = Object.hasOwn(translations, requestedLanguage)
	? requestedLanguage
	: 'en';
const text = translations[pageLanguage];
console.info('%cBuilt with ❤️ by Aliaksandr Ivanou', 'font-size: 14px');
document.querySelector('.expyears').textContent =
	new Date().getFullYear() - 2020;
const privacyToast = document.getElementById('privacyToast');
const privacyToastDismiss = document.getElementById('privacyToastDismiss');
const privacyToastKey = 'privacy-notice-dismissed';

let privacyToastDismissed = false;

try {
	privacyToastDismissed =
		window.sessionStorage.getItem(privacyToastKey) === '1';
} catch {
	privacyToastDismissed = false;
}

if (!privacyToastDismissed) {
	window.requestAnimationFrame(() => {
		privacyToast.classList.add('is-visible');
	});
}

privacyToastDismiss.addEventListener('click', () => {
	privacyToast.classList.remove('is-visible');

	try {
		window.sessionStorage.setItem(privacyToastKey, '1');
	} catch {}
});

const scrollCompass = document.getElementById('scrollCompass');
const scrollCompassIcon = scrollCompass.querySelector(
	'.scroll-compass-triangle',
);
const mainPortrait = document.getElementById('mainPortrait');
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
const languageNotice = document.getElementById('languageNotice');
const languageNoticeText = document.getElementById('languageNoticeText');
const languageNoticeLink = document.getElementById('languageNoticeLink');

const principleFlip = document.getElementById('principleFlip');
const portraitFrame = mainPortrait.closest('.portrait');
const portraitShake = document.getElementById('portraitShake');
const winMessage = document.getElementById('winMessage');

const fightImages = (mainPortrait.dataset.fightImages || '')
	.split(',')
	.map((item) => item.trim())
	.filter(Boolean);

fightImages.forEach((src) => {
	const image = new Image();
	image.src = src;
});

let fightCount = 0;
let fightLocked = false;
let winShown = false;
let pageFlipped = false;

function showConfetti() {
	if (winShown) {
		return;
	}

	winShown = true;

	const layer = document.createElement('div');
	layer.className = 'confetti-layer';
	document.body.appendChild(layer);

	const colors = [
		'#2fa866',
		'#f0b429',
		'#4f7cff',
		'#e05d5d',
		'#8a63d2',
		'#f07fb0',
	];

	const count = 90;

	for (let index = 0; index < count; index += 1) {
		const piece = document.createElement('span');
		piece.className = 'confetti-piece';
		piece.style.left = `${Math.random() * 100}%`;
		piece.style.color = colors[index % colors.length];
		piece.style.setProperty(
			'--fall-duration',
			`${1400 + Math.random() * 1300}ms`,
		);
		piece.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
		piece.style.setProperty('--spin', `${360 + Math.random() * 1080}deg`);
		piece.style.animationDelay = `${Math.random() * 220}ms`;
		layer.appendChild(piece);
	}

	winMessage.classList.add('is-visible');

	window.setTimeout(() => {
		winMessage.classList.remove('is-visible');
	}, 2400);

	window.setTimeout(() => {
		layer.remove();
	}, 3200);
}

if (fightImages.length > 0) {
	portraitFrame.addEventListener('click', (event) => {
		if (fightLocked || winShown) {
			return;
		}

		fightLocked = true;
		fightCount += 1;

		const rect = portraitFrame.getBoundingClientRect();
		const hitX = ((event.clientX - rect.left) / rect.width) * 100;
		const hitY = ((event.clientY - rect.top) / rect.height) * 100;

		portraitFrame.style.setProperty('--hit-x', `${hitX}%`);
		portraitFrame.style.setProperty('--hit-y', `${hitY}%`);

		const randomIndex = Math.floor(Math.random() * fightImages.length);
		const fightSrc = fightImages[randomIndex];
		const initialSrc = mainPortrait.dataset.defaultSrc;

		portraitShake.classList.remove('is-hit');
		void portraitShake.offsetWidth;
		portraitShake.classList.add('is-hit');
		mainPortrait.src = fightSrc;

		window.setTimeout(() => {
			mainPortrait.src = initialSrc;
			portraitShake.classList.remove('is-hit');
			fightLocked = false;

			if (fightCount >= 7) {
				showConfetti();
			}
		}, 500);
	});
}

principleFlip.addEventListener('click', () => {
	if (pageFlipped) {
		return;
	}

	pageFlipped = true;
	document.documentElement.classList.add('page-flipped');
});

const browserLanguage = (navigator.language || '').toLowerCase();
const browserPrimaryLanguage = browserLanguage.split('-')[0];

if (
	Object.hasOwn(translations, browserPrimaryLanguage) &&
	browserPrimaryLanguage !== pageLanguage
) {
	const alternative = translations[browserPrimaryLanguage];

	languageNoticeText.textContent = alternative.languageMessage;
	languageNoticeLink.textContent = alternative.languageLabel;
	languageNoticeLink.href = languagePaths[browserPrimaryLanguage];
	languageNoticeLink.hreflang = browserPrimaryLanguage;
	languageNoticeLink.lang = browserPrimaryLanguage;
	languageNotice.classList.add('is-visible');
}

let lastScrollY = window.scrollY;
let compassRotation = 0;
let compassFrame = null;

function updateScrollCompass() {
	const currentScrollY = window.scrollY;
	const delta = currentScrollY - lastScrollY;
	const scrollable =
		document.documentElement.scrollHeight - window.innerHeight;
	const isComplete = scrollable > 0 && currentScrollY >= scrollable - 2;

	scrollCompass.classList.toggle('is-visible', currentScrollY > 200);
	scrollCompass.classList.toggle('is-complete', isComplete);

	if (!isComplete && Math.abs(delta) > 0.5) {
		compassRotation += Math.max(-18, Math.min(18, delta * 0.22));
		scrollCompassIcon.style.transform = `rotate(${compassRotation}deg)`;
	}

	if (
		mainPortrait &&
		!fightLocked &&
		window.matchMedia('(min-width: 821px)').matches
	) {
		const targetSrc = isComplete
			? mainPortrait.dataset.completeSrc
			: mainPortrait.dataset.defaultSrc;

		if (targetSrc && !mainPortrait.src.endsWith(targetSrc)) {
			mainPortrait.src = targetSrc;
		}
	}

	lastScrollY = currentScrollY;
	compassFrame = null;
}

window.addEventListener(
	'scroll',
	() => {
		if (!compassFrame) {
			compassFrame = window.requestAnimationFrame(updateScrollCompass);
		}
	},
	{ passive: true },
);

scrollCompass.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

updateScrollCompass();

const supportsFinePointer = window.matchMedia(
	'(hover: hover) and (pointer: fine)',
).matches;
const prefersReducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)',
).matches;

if (supportsFinePointer && !prefersReducedMotion) {
	let mouseX = 0;
	let mouseY = 0;
	let ringX = 0;
	let ringY = 0;
	let cursorFrame = null;

	function animateCursor() {
		ringX += (mouseX - ringX) * 0.18;
		ringY += (mouseY - ringY) * 0.18;

		cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
		cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

		cursorFrame = window.requestAnimationFrame(animateCursor);
	}

	document.addEventListener(
		'pointermove',
		(event) => {
			mouseX = event.clientX;
			mouseY = event.clientY;
			cursorDot.classList.add('is-visible');
			cursorRing.classList.add('is-visible');

			if (!cursorFrame) {
				ringX = mouseX;
				ringY = mouseY;
				cursorFrame = window.requestAnimationFrame(animateCursor);
			}
		},
		{ passive: true },
	);

	document.addEventListener('pointerleave', () => {
		cursorDot.classList.remove('is-visible');
		cursorRing.classList.remove('is-visible');
	});

	document.addEventListener('pointerover', (event) => {
		const shouldHide = Boolean(
			event.target.closest(
				'a, button, img, figure, .portrait, .site-preview, .extension-card, .logo-item',
			),
		);

		cursorDot.classList.toggle('is-hidden', shouldHide);
		cursorRing.classList.toggle('is-hidden', shouldHide);
	});
}

const mobileTopbar = document.getElementById('mobileTopbar');
const mobileBreakpoint = window.matchMedia('(max-width: 820px)');

function updateMobileTopbar() {
	mobileTopbar.classList.toggle(
		'is-visible',
		mobileBreakpoint.matches && window.scrollY >= 600,
	);
}

updateMobileTopbar();
window.addEventListener('scroll', updateMobileTopbar, {
	passive: true,
});
mobileBreakpoint.addEventListener('change', () => {
	updateMobileTopbar();

	if (mobileBreakpoint.matches && mainPortrait) {
		mainPortrait.src = mainPortrait.dataset.defaultSrc;
	}
});

const themeToggle = document.getElementById('themeToggle');
const themeColor = document.getElementById('themeColor');

function updateThemeColor(theme) {
	themeColor.setAttribute(
		'content',
		theme === 'dark' ? '#111111' : '#fafafa',
	);
}

function applyTheme(theme) {
	root.dataset.theme = theme;
	localStorage.setItem('theme', theme);
	updateThemeColor(theme);

	themeToggle.setAttribute(
		'aria-label',
		theme === 'dark' ? text.themeLight : text.themeDark,
	);
}

updateThemeColor(root.dataset.theme);
themeToggle.setAttribute(
	'aria-label',
	root.dataset.theme === 'dark' ? text.themeLight : text.themeDark,
);

themeToggle.addEventListener('click', () => {
	applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

document.querySelectorAll('[data-current-year]').forEach((element) => {
	element.textContent = new Date().getFullYear();
});

document.getElementById('backToTop').addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

const storyCard = document.getElementById('storyCard');
const storyToggle = document.getElementById('storyToggle');

storyToggle.addEventListener('click', () => {
	const expanded = storyCard.classList.toggle('is-expanded');
	storyToggle.setAttribute('aria-expanded', String(expanded));
	storyToggle.querySelector('span').textContent = expanded
		? text.storyHide
		: text.storyMore;
});

const shareUrl = window.location.href.split('#')[0];
const shareText = document.title;

const shareLinks = {
	telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
	whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
	linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
	x: `https://x.com/intent/post?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
	facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
};

document.querySelectorAll('[data-share]').forEach((link) => {
	link.href = shareLinks[link.dataset.share];
});

const faqTabs = document.querySelectorAll('.faq-tab');
const faqPanels = document.querySelectorAll('.faq-panel');

faqTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		faqTabs.forEach((item) => {
			item.setAttribute('aria-selected', 'false');
		});

		faqPanels.forEach((panel) => {
			panel.hidden = true;
		});

		tab.setAttribute('aria-selected', 'true');
		document.getElementById(tab.getAttribute('aria-controls')).hidden =
			false;
	});
});

document.querySelectorAll('.faq-panel').forEach((panel) => {
	panel.querySelectorAll('.faq-question').forEach((question) => {
		question.addEventListener('click', () => {
			panel.querySelectorAll('.faq-question').forEach((item) => {
				item.setAttribute(
					'aria-expanded',
					item === question ? 'true' : 'false',
				);
			});
		});
	});
});

if (window.matchMedia('(hover: hover)').matches) {
	document.querySelectorAll('.project').forEach((project) => {
		project.addEventListener('pointermove', (event) => {
			const rect = project.getBoundingClientRect();
			project.style.setProperty(
				'--mouse-x',
				`${event.clientX - rect.left}px`,
			);
			project.style.setProperty(
				'--mouse-y',
				`${event.clientY - rect.top}px`,
			);
		});
	});
}

document
	.querySelectorAll('.contact-button, .contact-link')
	.forEach((button) => {
		button.addEventListener('click', (event) => {
			event.preventDefault();

			const href = button.getAttribute('href');
			let targetSelector = '#contact-form-root';

			if (href) {
				try {
					const url = new URL(href, window.location.href);

					if (
						url.origin === window.location.origin &&
						url.pathname === window.location.pathname &&
						url.hash
					) {
						targetSelector = decodeURIComponent(url.hash);
					}
				} catch {
					if (href.startsWith('#')) {
						targetSelector = href;
					}
				}
			}

			let target;

			try {
				target = document.querySelector(targetSelector);
			} catch {
				target = document.querySelector('#contact-form-root');
			}

			if (!target) return;

			const offset =
				parseFloat(
					getComputedStyle(document.documentElement).fontSize,
				) * 4;

			const targetTop =
				target.getBoundingClientRect().top + window.scrollY - offset;

			window.scrollTo({
				top: targetTop,
				behavior: 'smooth',
			});

			const nameInput =
				target.querySelector('input[name="name"]') ||
				document.querySelector('input[name="name"]');

			if (nameInput) {
				nameInput.focus({ preventScroll: true });
			}
		});
	});

const form = document.getElementById('contactForm');
const status = document.getElementById('contactStatus');
const formUrl = 'https://flow.meph.one/api/v1/webhooks/L5kkWDpbQ382xo7x7Giev';

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	const button = form.querySelector('button[type="submit"]');

	const escapeTelegramHtml = (value) =>
		String(value)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

	const data = new FormData(form);

	for (const [key, value] of data.entries()) {
		if (typeof value === 'string') {
			data.set(key, escapeTelegramHtml(value));
		}
	}

	button.disabled = true;
	status.textContent = text.sending;

	try {
		const response = await fetch(formUrl, {
			method: 'POST',
			body: data,
		});

		if (!response.ok) {
			throw new Error('Request failed');
		}

		form.reset();
		status.textContent = text.sent;
	} catch (error) {
		status.textContent = text.failed;
	} finally {
		button.disabled = false;
	}
});
