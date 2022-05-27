import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ product, setModalProduct, refetch }) => {
    const { name } = product;

    const handleDeleteBtn = (id) => {
        fetch(`https://innovus-client.herokuapp.com/product/${id}`, {
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
            <input type="checkbox" id="deleting-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure ?</h3>
                    <p class="py-4">You want to Delete <span className='text-blue-500 font-bold'>{name}</span></p>
                    <div class="modal-action">
                        <label for="deleting-modal" class="btn">Cancel</label>
                        <label onClick={() => handleDeleteBtn(product._id)} class="btn btn-secondary bg-red-500 text-white border-none">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;