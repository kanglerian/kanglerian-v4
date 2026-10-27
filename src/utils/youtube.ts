/**
 * Ekstrak YouTube Video ID dari berbagai format input:
 * - Kode HTML <iframe src="https://www.youtube.com/embed/VIDEO_ID"...>
 * - URL Embed: https://www.youtube.com/embed/VIDEO_ID
 * - URL Watch: https://www.youtube.com/watch?v=VIDEO_ID
 * - URL Short: https://youtu.be/VIDEO_ID
 * - Video ID langsung (11 karakter)
 */
export function getYoutubeId(input?: string): string | null {
	if (!input) return null;
	const trimmed = input.trim();

	// 1. Jika input berupa kode <iframe ...>
	const iframeSrcMatch = trimmed.match(/src=["']([^"']+)["']/i);
	const target = iframeSrcMatch ? iframeSrcMatch[1] : trimmed;

	// 2. Cocokkan pola URL YouTube (embed, watch?v=, youtu.be, shorts)
	const regex =
		/(?:youtube(?:-nocookie)?\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	const match = target.match(regex);
	if (match && match[1]) {
		return match[1];
	}

	// 3. Jika input langsung berupa 11 karakter Video ID
	if (/^[a-zA-Z0-9_-]{11}$/.test(target)) {
		return target;
	}

	return null;
}

export function getYoutubeEmbedUrl(input?: string): string | null {
	const id = getYoutubeId(input);
	return id ? `https://www.youtube.com/embed/${id}` : null;
}

export function getYoutubeWatchUrl(input?: string): string {
	const id = getYoutubeId(input);
	if (id) return `https://www.youtube.com/watch?v=${id}`;
	return input || 'https://youtube.com';
}

export function getYoutubeThumbnail(input?: string): string | null {
	const id = getYoutubeId(input);
	return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;
}
