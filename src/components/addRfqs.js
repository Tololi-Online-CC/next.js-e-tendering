import Swal from 'sweetalert2';

export default async function addRfq() {
    await Swal.fire({
        // title: 'Add New RFQ',
        html:
            '<h2>RFQ Details</h2>' +
            '<h3 class="swal2-input-label">Title</h3>' + '<input id="swal-input1" class="swal2-input">' +
            '<h3 class="swal2-input-label">Industry</h3>' + '<input id="swal-input2" class="swal2-input">' +
            '<h3 class="swal2-input-label">Due Date</h3>' + '<input id="swal-input3" type="date" class="swal2-input">' +
            '<h3 class="swal2-input-label">Short Description</h3>' + '<input id="swal-input4" class="swal2-input">' +
            '<h2>Instructions to Bidder</h2>' +
            '<h3 class="swal2-input-label">Your Rights</h3>' + '<textarea id="swal-input5" class="swal2-textarea"></textarea>' +
            '<h3 class="swal2-input-label">Requested Documents</h3>' + '<textarea id="swal-input6" class="swal2-textarea"></textarea>' +
            '<h3 class="swal2-input-label">Validity of Quotations</h3>' + '<textarea id="swal-input7" class="swal2-textarea"></textarea>' +
            '<h3 class="swal2-input-label">Eligibility Criteria</h3>' + '<textarea id="swal-input8" class="swal2-textarea"></textarea>' +
            '<h3 class="swal2-input-label">Evaluation of Quotations</h3>' + '<textarea id="swal-input9" class="swal2-textarea"></textarea>' +
            '<h3 class="swal2-input-label">Technical Compliance</h3>' + '<textarea id="swal-input10" class="swal2-textarea"></textarea>' +
            '<h3 class="swal2-input-label">Margin of Preference</h3>' + '<textarea id="swal-input2" class="swal2-textarea"></textarea>',
        preConfirm: () => {
            const title = Swal.getPopup().querySelector('#swal-input1').value
            const industry = Swal.getPopup().querySelector('#swal-input2').value
            const date = Swal.getPopup().querySelector('#swal-input3').value
            const description = Swal.getPopup().querySelector('#swal-input4').value
            const rights = Swal.getPopup().querySelector('#swal-input5').value
            const documents = Swal.getPopup().querySelector('#swal-input6').value
            const validity = Swal.getPopup().querySelector('#swal-input7').value
            const eligibility = Swal.getPopup().querySelector('#swal-input8').value
            const compliance = Swal.getPopup().querySelector('#swal-input9').value
            const margin = Swal.getPopup().querySelector('#swal-input10').value
            const errors = []
            if (!title) {
                errors.push('Title is required')
            }
            if (!industry) {
                errors.push('Industry is required')
            }
            if (!date) {
                errors.push('Due date is required')
            }
            if (!description) {
                errors.push('Short description is required')
            }
            if (!rights) {
                errors.push('Rights of the Operator is required')
            }
            if (!documents) {
                errors.push('Requested Documents is required')
            }
            if (!validity) {
                errors.push('Validity of Quotation is required')
            }
            if (!eligibility) {
                errors.push('Eligibility Criteria is required')
            }
            if (!compliance) {
                errors.push('Technical Compliance is required')
            }
            if (!margin) {
                errors.push('Margin of Preference is required')
            }
            if (errors.length) {
                Swal.showValidationMessage(errors.join('<br>'))
                return false
            }
            return { title: title, errors: errors}
        },
        confirmButtonText: 'Post RFQ',
        confirmButtonColor: '#111',
        customClass: 'swal-wide',
    }).then((result) => {
       if (result.isConfirmed) {
        Swal.fire({
            title: 'Submited!',
            text: 'Your RFQ has been successfuly submited.',
            icon: 'success',
            confirmButtonColor: '#000000',
        })
       }
    }) 
}