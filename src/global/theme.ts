import { get, writable, type Writable } from 'svelte/store'

type Theme = 'light' | 'dark'

const Theme: Writable<Theme> = writable('light')
export default Theme

export const toggleTheme = () => {
	const current = get(Theme)
	current === 'dark' ? Theme.set('light') : Theme.set('dark')
}
