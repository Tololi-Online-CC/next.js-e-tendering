import { useRouter } from 'next/router'
import { useFetchDetail } from '@/pages/api/useFetch'
import Swal from 'sweetalert2'
import OperatorLayout from '@/components/operatorLayout';
import Link from 'next/link';

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
                title: 'Are you sure you want to approve this Bid?',
                showDenyButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `Cancel`,
                confirmButtonColor: '#000000'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'The Bid has been approved!',
                        message: '',
                        icon: 'success',
                        confirmButtonColor: '#000000',
                    })
                } else if (result.isDenied) {
                    Swal.fire({
                        title: 'Failed to approve Bid!',
                        message: '',
                        icon: 'info',
                        confirmButtonColor: '#000000',
                    })
                }
            })
        }

        function reject() {
            Swal.fire({
                title: 'Are you sure you want to reject this Bid?',
                showDenyButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `Cancel`,
                confirmButtonColor: '#000000'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'The Bid has rejected!',
                        message: '',
                        icon: 'success',
                        confirmButtonColor: '#000000',
                    })
                } else if (result.isDenied) {
                    Swal.fire({
                        title: 'Failed to reject Bid!',
                        message: '',
                        icon: 'info',
                        confirmButtonColor: '#000000',
                    })
                }
            })
        }

        return (
            <OperatorLayout>
                <div>
                    <span className="link" onClick={goBack}><ion-icon name="arrow-back-outline"></ion-icon> Back</span>
                    <div className="bid-request-card">
                        <h2>{prod_data.attributes.Company}: {prod_data.attributes.request_title}</h2>
                        <p><b>ID: </b>{prod_data.id}</p>
                        <p><b>Bidder: </b>{prod_data.attributes.Company}</p>
                        <p><b>RFQ applied for: </b><Link href="#">Total: {prod_data.attributes.request_title}</Link></p>
                        <p><b>Industry: </b>{prod_data.attributes.Category}</p>
                        <p><b>Date: </b>{prod_data.attributes.due_date}</p>
                        <p><b>Short description: </b>{prod_data.attributes.request_description}</p><br />
                        <p>
                            <b>Bid documents: </b><a href="bid.zip" download>Download</a>
                        </p><br />
                    </div>
                </div>
            </OperatorLayout>
        )
    }
}
