import { css } from "styled-components";

const sizes = {
	// Default styles written mobile-first assuming 320px width
	small: 820,
	medium: 970,
	large: 1200,
}

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)};
		}
	`
	// acc[label] = (...args) => css`
	// 	@media (max-width: ${sizes[label]}px) {
	// 		${css(...args)};
	// 	}
	// `

	return acc
}, {})

export default media