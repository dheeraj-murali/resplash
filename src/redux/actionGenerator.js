export const UPDATE_PHOTO = 'UPDATE_PHOTO';

export const updatePhoto = (photo) => {
	return {
		type: UPDATE_PHOTO,
		payload: photo,
	};
};
