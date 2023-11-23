import Layouts from "../../Layouts/Layouts"
import "./DetailAkunUser.style.css"
import { iconFace } from "../../../image"
import statusAkun from "../../../src/assets/statusAkun.svg";
import info from "../../../src/assets/info.svg";

const DetailUser = () => {
    return (
        <Layouts titlePage={'Detail Akun User'}>
            <section className="detail-user" id="detail-user">
                <p className="routes">
                    <span> Manage User / </span> Detail Akun User
                </p>
            </section>


            <section className="detail-user-id ms-2">
                <div className="row">
                    <div className="col-4">
                        {/* detail username dan avatar */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card card-1">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={iconFace} alt="" />
                                        </div>
                                        <div className="col-8 my-auto">
                                            <h4>Nama user</h4>
                                            <p className="detail-label mb-0">User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* detail informasi akun(status akun) */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card card-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <img src={statusAkun} alt="" />
                                            <span>Informasi Akun</span>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-8">
                                            <span>Status Akun</span>
                                            <img src={info} alt="" className="info-icon" />
                                        </div>
                                        <div className="col-4 my-auto d-flex justify-content-end">
                                            {/* swith on off akun */}
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked={true} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* informasi akun (detail) */}
                    <div className="col-8">
                        <div className="card card-3 ms-4">
                            <h4>Informasi Akun</h4>
                            <p className="label-detail">ID Akun</p>
                            <p className="value-detail">idAccount</p>
                            <p className="label-detail">Nama User</p>
                            <p className="value-detail">ID Akun</p>
                            <p className="label-detail">No Telp</p>
                            <p className="value-detail">ID Akun</p>
                            <p className="label-detail">ID Akun</p>
                            <p className="value-detail">ID Akun</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    )
}

export default DetailUser