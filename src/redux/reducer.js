import { UPDATE_PHOTO } from './actionGenerator';

const initialState = {
	photos: [
		{
			id: '0001',
			src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
			name: 'forest',
			description: 'green forest',
		},
		{
			id: '0002',
			src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
			name: '',
			description: '',
		},
		{
			id: '0003',
			src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
			name: '',
			description: '',
		},
		{
			id: '0004',
			src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
			name: '',
			description: '',
		},
		{
			id: '0005',
			src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
			name: '',
			description: '',
		},
		{
			id: '0006',
			src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
			name: '',
			description: '',
		},
		{
			id: '0007',
			src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
			name: '',
			description: '',
		},
		{
			id: '0008',
			src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
			name: '',
			description: '',
		},
		{
			id: '0009',
			src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
			name: '',
			description: '',
		},
		{
			id: '0010',
			src: 'https://source.unsplash.com/XiDA78wAZVw/600x799',
			name: 3,
			description: 4,
		},
		{
			id: '0011',
			src: 'https://source.unsplash.com/x8xJpClTvR0/800x599',
			name: '',
			description: '',
		},
		{
			id: '0012',
			src: 'https://source.unsplash.com/qGQNmBE7mYw/800x599',
			name: '',
			description: '',
		},
		{
			id: '0013',
			src: 'https://source.unsplash.com/NuO6iTBkHxE/800x599',
			name: '',
			description: '',
		},
		{
			id: '0014',
			src: 'https://source.unsplash.com/pF1ug8ysTtY/600x400',
			name: '',
			description: '',
		},
		{
			id: '0015',
			src: 'https://source.unsplash.com/A-fubu9QJxE/800x533',
			name: '',
			description: '',
		},
		{
			id: '0016',
			src: 'https://source.unsplash.com/5P91SF0zNsI/740x494',
			name: '',
			description: '',
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_PHOTO:
			return {
				photos: state.photos.map((photo) => {
					if (photo.id === action.payload.id) {
						return {
							...photo,
							name: action.payload.name,
							description: action.payload.description,
						};
					} else {
						return photo;
					}
				}),
			};
		default:
			return state;
	}
};

export default reducer;
