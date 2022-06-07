document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/sig/');
    const data = await response.json();

    const options = {
        cloudName: data.cloudName,
        uploadPreset: 'ds_default'
        // apiKey: data.apiKey,
        // uploadSignatureTimestamp: data.timestamp,
        // uploadSignature: data.signature,
        // cropping: true,
        // sources: ['local'],
        // multiple: false,
        // clientAllowedFormats: ['jpg','png','gif'],
        // folder: 'devspot'
    }

    console.log(options);

    const processResults = (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log(result)

            const url = result.info.url;
            // post url data to user model
            var profImg = document.createElement('img');
            profImg.setAttribute('src', url);
            profImg.classList.add('thumbnail');
            var picContainer = document.getElementById('picture-div');
            picContainer.append(profImg);
            picContainer.setAttribute('data-src', url);

        } else if (error) {
            console.log(error);
        }
    }

    const myWidget = window.cloudinary.createUploadWidget(
        options,
        processResults
    );
    document.getElementById('upload-btn').addEventListener('click', () => myWidget.open(), false);
});