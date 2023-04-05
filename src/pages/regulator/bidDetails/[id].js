import { useRouter } from 'next/router'
import { useFetchDetail } from '@/pages/api/useFetch'
import Swal from 'sweetalert2'
import RegulatorLayout from '@/components/regulatorLayout';

export default function bidDetails() {
    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    const { id } = router.query
    const { loading, error, prod_data } = useFetchDetail(id)

    if (loading) return (<Layout><p>Loading...</p></Layout>)
    if (error) return (<Layout><p>Error</p></Layout>)


    if (prod_data) {
        function success() {
            Swal.fire({
                title: 'Are you sure you want to approve this RFQ?',
                showDenyButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `Cancel`,
                confirmButtonColor: '#000000'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'The RFQ has been approved!',
                        message: '', 
                        icon: 'success',
                        confirmButtonColor: '#000000',
                    })
                } else if (result.isDenied) {
                    Swal.fire({
                        title: 'Failed to approve RFQ!',
                        message: '', 
                        icon: 'info',
                        confirmButtonColor: '#000000',
                    })
                }
            })
        }
    
        function reject() {
            Swal.fire({
                title: 'Are you sure you want to reject this RFQ?',
                showDenyButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `Cancel`,
                confirmButtonColor: '#000000'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'The RFQ has rejected!',
                        message: '', 
                        icon: 'success',
                        confirmButtonColor: '#000000',
                    })
                } else if (result.isDenied) {
                    Swal.fire({
                        title: 'Failed to reject RFQ!',
                        message: '', 
                        icon: 'info',
                        confirmButtonColor: '#000000',
                    })
                }
            })
        }
    
        return (
            <RegulatorLayout>
                <div>
                    <span className="link" onClick={goBack}><ion-icon name="arrow-back-outline"></ion-icon> Back</span>
                    <div className="bid-request-card">
                        <h2>{prod_data.attributes.Company}: {prod_data.attributes.request_title}</h2>
                        <p><b>ID: </b>{prod_data.id}</p>
                        <p><b>Category: </b>{prod_data.attributes.Category}</p>
                        <p><b>Due Date: </b>{prod_data.attributes.due_date}</p><br />
                        <h3>RFQ Description</h3>
                        <p>{prod_data.attributes.request_description}</p>
                        <h3>Insturctions to Bidder</h3>
                        <ol>
                            <li>
                                <h4>Rights of <b>{prod_data.attributes.Company}</b></h4>
                                <p>{prod_data.attributes.Company} reserves the right:</p>
                                <ol type='a'>
                                    <li>to split the contract as per the lowest evaluated cost per item, or</li>
                                    <li>to accept or reject any quotation approved by the regulator (NamCor); and</li>
                                    <li>to cancel the quotation process and reject all quotations at any time prior to contract award.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Preparation of Proposal</h4>
                                <p>You are requested to quote for the items mentioned in Section III by completing, signing and returning:</p>
                                <ol type='a'>
                                    <li>the Quotation Letter in Section II with its annex for Bid Securing Declaration.</li>
                                    <li>the List of Goods and Price Schedule Section III;</li>
                                    <li>the Specifications and Compliance Sheet in Section V; and</li>
                                    <li>any other attachment deemed appropriate.</li>
                                </ol>
                                <p>You are advised to carefully read the complete Request for Sealed Quotations document, including the Special Conditions of Contract in Section VII, before preparing your quotation. The standard forms in this document may be retyped for completion but the Bidder is responsible for their accurate reproduction.</p>
                            </li>
                            <li>
                                <h4>Validity of Quotations</h4>
                                The Quotation validity period shall be 60 days from the date of submission deadline.
                            </li>
                            <li>
                                <h4>Eligibility Criteria</h4>
                                <p>To be eligible to participate in this Quotation exercise, you should provide the following documents:</p>
                                <ol type='A'>
                                    <li>a valid company Registration Certificate;</li>
                                    <li>an original valid good Standing Tax Certificate;</li>
                                    <li>an original valid good Standing Social Security Certificate;</li>
                                    <li>a valid certified copy of Affirmative Action Compliance Certificate, proof from Employment Equity Commissioner that bidder is not a relevant employer, or exemption issued in terms of Section 42 of the Affirmative Action Act, 1998;</li>
                                    <li>a certificate indicating SME Status (for Bids reserved for SMEs);</li>
                                    <li>An undertaking on the part of the Bidder that the salaries and wages payable to its personnel in respect of this proposal are compliant to the relevant laws, Remuneration Order, and Award, where applicable and that it will abide to sub-clause 4.6 of the General conditions of Contract if it is awarded the contract or part thereof; and</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Evaluation of Quotations</h4>
                                <p><b>{prod_data.attributes.Company}</b> shall have the right to request for clarifications in writing during evaluation. Offers that are substantially responsive shall be compared on the basis of price or ownership cost, subject to Margin of Preference where applicable, to determine the lowest evaluated quotation.</p>
                            </li>
                            <li>
                                <h4>Technical Compliance</h4>
                                <p>Bidders shall submit along with their quotations documents, such as catalogues or any other literature to substantiate compliance with the required specifications and to qualify deviations if any with respect to NamPower’s requirements.</p>
                                <p>The Specifications, Performance Requirements and Compliance Sheet details the minimum specifications of the goods/items to be supplied. The specifications have to be met but no credit will be given for exceeding the specifications.</p>
                            </li>
                            <li>
                                <h4>Margin of Preference will be applied as per formula below:</h4>
                                <p>A = (MP x BP)/100</p>
                                <p>Where:</p>
                                <ol type='a'>
                                    <li>“A” represents the amount to be determined:</li>
                                    <li>“MP” represents the total percentage of all margins of preferences granted in respect and</li>
                                    <li>“BP” represents the bid price.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                    <div className='-center'>
                        <button className='approve-button' style={{ marginBottom: "20px" }} onClick={success}>Approve</button>
                        <button className='reject-button' style={{ marginBottom: "20px" }} onClick={reject}>Reject Proposal</button>
                    </div>
                </div>
            </RegulatorLayout>
        )
    }
}
