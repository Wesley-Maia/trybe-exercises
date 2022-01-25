const upload = (req, res) => {
	if (req.fileDuplicated) { 
		return res.status(409).send({ error: { mesage: 'File already exists' } }); 
	}
				
	if (req.fileValidationError) {
		return res.status(403).send({ error: { message: 'Extension must be `png`' } });
	}

	res.status(200).json({ message: 'Sucesso' });
};

module.exports = upload;
