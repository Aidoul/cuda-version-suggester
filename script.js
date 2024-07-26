document.getElementById('versionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const driverVersion = document.getElementById('driverVersion').value;
    const suggestions = getSuggestions(driverVersion);
    displaySuggestions(suggestions);
});

function getSuggestions(driverVersion) {
    let cudaVersion;
    let pytorchVersion;
    let pythonVersion;
    
    if (parseFloat(driverVersion) >= 450) {
        cudaVersion = "11.2";
        pytorchVersion = "1.8.1";
        pythonVersion = "3.9";
    } else if (parseFloat(driverVersion) >= 440) {
        cudaVersion = "11.0";
        pytorchVersion = "1.7.1";
        pythonVersion = "3.8";
    } else {
        cudaVersion = "10.2";
        pytorchVersion = "1.6.0";
        pythonVersion = "3.7";
    }

    return {
        cuda: cudaVersion,
        pytorch: pytorchVersion,
        python: pythonVersion
    };
}

function displaySuggestions(suggestions) {
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = `
        <h2>Recommended Versions</h2>
        <p>CUDA Version: ${suggestions.cuda}</p>
        <p>PyTorch Version: ${suggestions.pytorch}</p>
        <p>Python Version: ${suggestions.python}</p>
    `;
}
