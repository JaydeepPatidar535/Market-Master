document.addEventListener('DOMContentLoaded', function () {
    const selectedCompaniesParam = getQueryParam('selectedCompanies');
    const selectedCompanies = selectedCompaniesParam ? selectedCompaniesParam.split(',') : [];

    const selectedCompaniesContainer = document.getElementById('selected-companies');

    // Create a mapping of company names to URLs
    const companyUrls = {
        'Amazon': 'company/amazon_info.html',
        'Adani': 'company/adani_info.html',
        'Apple': 'company/apple_info.html',
        // Add more companies and their URLs here
    };

    // Check if there are selected companies
    if (selectedCompanies.length === 0) {
        selectedCompaniesContainer.innerHTML = '<p>No companies selected.</p>';
    } else {
        selectedCompanies.forEach(function (companyName) {
            const companyBox = document.createElement('div');
            companyBox.classList.add('selected-company-box');

            // Create an anchor element with an onclick event
            const companyLink = document.createElement('a');
            companyLink.href = '#'; // Set a placeholder URL or use '#' to make it clickable
            companyLink.innerHTML = `
                <img src="images/${companyName.toLowerCase()}.png" alt="${companyName} Logo" />
                <p>${companyName}</p>
            `;

            // Add an event listener to the anchor element
            companyLink.addEventListener('click', function () {
                // Look up the URL based on the company name
                const companyUrl = companyUrls[companyName];
                if (companyUrl) {
                    // Redirect to the specified URL
                    window.location.href = companyUrl;
                }
            });

            // Append the anchor element to the company box
            companyBox.appendChild(companyLink);
            selectedCompaniesContainer.appendChild(companyBox);
        });
    }
});

// Function to parse query parameters
function getQueryParam(name) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(name);
}
