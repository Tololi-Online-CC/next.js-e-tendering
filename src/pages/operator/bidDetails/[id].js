import { useRouter } from 'next/router'
import { useFetchDetail } from '@/pages/api/useFetch'
import Swal from 'sweetalert2'
import OperatorLayout from '@/components/operatorLayout';
import addRfq from '@/components/addRfqs';
import { OperatorDataGridBids } from '@/components/DataGridOperator';

export default function bidDetails() {
    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    const { id } = router.query
    const { loading, error, prod_data } = useFetchDetail(id)

    if (loading) return (<Layout><p>Loading...</p></Layout>)
    if (error) return (<Layout><p>Error</p></Layout>)

    async function buttonClick() {
        const { value: file } = await Swal.fire({
            title: 'Place a proposal',
            html: '<h4>Please upload a zip folder of your proposal documents</h4>\n<p>The zipped folder should include all requiremnts under Eligibility Criteria</p>',
            input: 'file',
            confirmButtonColor: '#000000',
            confirmButtonText: 'Submit proposal',
            inputAttributes: {
                'accept': 'zip/',
                'aria-label': 'Upload your proposal document'
            }
        })
        if (file) {
            Swal.fire({
                title: 'Submited!',
                text: 'Your proposal has been successfuly submited.',
                icon: 'success',
                confirmButtonColor: '#000000',
            })
        }
    }
    if (prod_data) {
        return (
            <OperatorLayout>
                <div>
                    <span className="link" onClick={goBack}><ion-icon name="arrow-back-outline"></ion-icon> Back</span>
                    <div className="bid-header" style={{width: "90%", margin: "0 auto"}}>
                        <p></p>
                        <button className='add-event-button' onClick={addRfq}>Edit RFQ</button>
                    </div>
                    
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
                                    <li><span>to split the contract as per the lowest evaluated cost per item, or</span></li>
                                    <li><span>to accept or reject any quotation approved by the regulator (NamCor); and</span></li>
                                    <li><span>to cancel the quotation process and reject all quotations at any time prior to contract award.</span></li>
                                </ol>
                            </li>
                            <li>
                                <h4>Preparation of Proposal</h4>
                                <p>You are requested to quote for the items mentioned in Section III by completing, signing and returning:</p>
                                <ol type='a'>
                                    <li><span>the Quotation Letter in Section II with its annex for Bid Securing Declaration.</span></li>
                                    <li><span>the List of Goods and Price Schedule Section III;</span></li>
                                    <li><span>the Specifications and Compliance Sheet in Section V; and</span></li>
                                    <li><span>any other attachment deemed appropriate.</span></li>
                                </ol>
                                <p>You are advised to carefully read the complete Request for Sealed Quotations document, including the Special Conditions of Contract in Section VII, before preparing your quotation. The standard forms in this document may be retyped for completion but the Bidder is responsible for their accurate reproduction.</p>
                            </li>
                            <li>
                                <h4>Validity of Quotations</h4>
                                <span>The Quotation validity period shall be 60 days from the date of submission deadline.</span>
                            </li>
                            <li>
                                <h4>Eligibility Criteria</h4>
                                <p>To be eligible to participate in this Quotation exercise, you should provide the following documents:</p>
                                <ol type='A'>
                                    <li><span>a valid company Registration Certificate;</span></li>
                                    <li><span>an original valid good Standing Tax Certificate;</span></li>
                                    <li><span>an original valid good Standing Social Security Certificate;</span></li>
                                    <li><span>a valid certified copy of Affirmative Action Compliance Certificate, proof from Employment Equity Commissioner that bidder is not a relevant employer, or exemption issued in terms of Section 42 of the Affirmative Action Act, 1998;</span></li>
                                    <li><span>a certificate indicating SME Status (for Bids reserved for SMEs);</span></li>
                                    <li><span>An undertaking on the part of the Bidder that the salaries and wages payable to its personnel in respect of this proposal are compliant to the relevant laws, Remuneration Order, and Award, where applicable and that it will abide to sub-clause 4.6 of the General conditions of Contract if it is awarded the contract or part thereof; and</span></li>
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
                                    <li><span>“A” represents the amount to be determined:</span></li>
                                    <li><span>“MP” represents the total percentage of all margins of preferences granted in respect and</span></li>
                                    <li><span>“BP” represents the bid price.</span></li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                    <div className='bid-received'>
                        <h2 style={{ paddingLeft: "20px" }}>Bids Received</h2>
                        <OperatorDataGridBids />
                    </div>
                </div>
            </OperatorLayout>
        )
    }
}
