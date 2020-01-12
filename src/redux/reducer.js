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
			name: 'Mashroom',
			description: 'Red Mashroom in dense forest',
		},
		{
			id: '0003',
			src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
			name: 'Forest',
			description: 'Forest during the fall',
		},
		{
			id: '0004',
			src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
			name: 'Foggy',
			description: 'Foggy forest morning',
		},
		{
			id: '0005',
			src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
			name: 'Leaves',
			description: 'Dry cold leaves',
		},
		{
			id: '0006',
			src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
			name: 'The Mist',
			description: 'Misty forest',
		},
		{
			id: '0007',
			src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
			name: 'Pine Green',
			description: 'Dark green pine leaves',
		},
		{
			id: '0008',
			src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
			name: 'The Nut',
			description: 'A cute littel Nut',
		},
		{
			id: '0010',
			src: 'https://source.unsplash.com/XiDA78wAZVw/600x799',
			name: 'Brown Leaves',
			description: 'Brown leaves on a tree',
		},
		{
			id: '0011',
			src: 'https://source.unsplash.com/x8xJpClTvR0/800x599',
			name: 'Path less travled',
			description: 'Forest path tavelled by no man',
		},
		{
			id: '0012',
			src: 'https://source.unsplash.com/qGQNmBE7mYw/800x599',
			name: 'Road to solitude',
			description: 'Road leading into the forest',
		},
		{
			id: '0013',
			src: 'https://source.unsplash.com/NuO6iTBkHxE/800x599',
			name: 'Socks',
			description: 'Winter is cold',
		},
		{
			id: '0014',
			src: 'https://source.unsplash.com/pF1ug8ysTtY/600x400',
			name: 'Yellow Mellow',
			description: 'Yellow trees in a dense forest',
		},
		{
			id: '0015',
			src: 'https://source.unsplash.com/A-fubu9QJxE/800x533',
			name: 'Nature colors',
			description: 'Colour trees in a forest',
		},
		{
			id: '0016',
			src: 'https://source.unsplash.com/5P91SF0zNsI/740x494',
			name: 'Orange',
			description: 'Orange trees in a valley near a lake',
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
