import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ product, setModalProduct, refetch }) => {
    const { name } = product;

    const handleDeleteBtn = (id) => {
        fetch(`https://proud-lime-bluefish.cyclic.app/product/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success("This product is Permanenty Deleted")
                    setModalProduct(null)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="deleting-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure ?</h3>
                    <p className="py-4">You want to Delete <span className='text-blue-500 font-bold'>{name}</span></p>
                    <div className="modal-action">
                        <label htmlFor="deleting-modal" className="btn">Cancel</label>
                        <label onClick={() => handleDeleteBtn(product._id)} className="btn btn-secondary bg-red-500 text-white border-none">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;