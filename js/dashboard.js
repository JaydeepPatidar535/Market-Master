// Array to store selected companies
const selectedCompanies = [];

// Function to toggle the selection of a company box
function toggleCompany(companyBox) {
    const companyName = companyBox.querySelector('p').textContent;
    
    if (selectedCompanies.includes(companyName)) {
        // Company is already selected, deselect it
        const index = selectedCompanies.indexOf(companyName);
        if (index !== -1) {
            selectedCompanies.splice(index, 1);
        }
        companyBox.classList.remove('selected');
    } else {
        // Company is not selected, select it
        selectedCompanies.push(companyName);
        companyBox.classList.add('selected');
    }
}

// Function to apply the filter and redirect to a new page
function applyFilter() {
    // Redirect to a new page with selected companies
    const selectedCompaniesParam = selectedCompanies.join(',');
    const newPageURL = `filterpage.html?selectedCompanies=${selectedCompaniesParam}`;
    window.location.href = newPageURL;
}
