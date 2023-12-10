import { useEffect, useState } from "react";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  iconTotalUser,
  iconUserBaru,
  iconUserAktif,
  iconUserTidakAktif,
} from "../../../image";

export const dataUsers = [
  {
    id: 129867,
    image: avatar1,
    userName: "Rafael Leao",
    email: "alma.lawson@example.com",
    telephone: "08123189239",
    statusAkun: "Aktif",
    action: "...",
  },
  {
    id: 129861,
    image: avatar2,
    userName: "Esther Howard",
    email: "willie.jennings@example.com",
    telephone: "08123189239",
    statusAkun: "Tidak Aktif",
    action: "...",
  },
  {
    id: 129862,
    image: avatar3,
    userName: "Bessie Cooper",
    email: "tim.jennings@example.com",
    telephone: "08123189239",
    statusAkun: "Aktif",
    action: "...",
  },
  {
    id: 129863,
    image: avatar4,
    userName: "Marvin McKinney",
    email: "michael.mitc@example.com",
    telephone: "08123189239",
    statusAkun: "Tidak Aktif",
    action: "...",
  },
  {
    id: 129864,
    image: avatar5,
    userName: "Ralph Edwards",
    email: "debra.holt@example.com",
    telephone: "08123189239",
    statusAkun: "Aktif",
    action: "...",
  },
  {
    id: 129865,
    image: avatar6,
    userName: "Albert Flores",
    email: "abill.sanders@example.com",
    telephone: "08123189239",
    statusAkun: "Aktif",
    action: "...",
  },
  {
    id: 129866,
    image: avatar7,
    userName: "Darrell Steward",
    email: "kenzi.lawson@example.com",
    telephone: "08123189239",
    statusAkun: "Tidak Aktif",
    action: "...",
  },
  {
    id: 129868,
    image: avatar8,
    userName: "Kathryn Murphy",
    email: "jessica.hanson@example.com",
    telephone: "08123189239",
    statusAkun: "Aktif",
    action: "...",
  },
];

// export const columnUser = [
//     {
//         field: 'nama',
//         header: 'Nama',
//     },
//     {
//         field: 'email',
//         header: 'Email',
//     },
//     {
//         field: 'telepon',
//         header: 'No. Telp',
//     },
//     {
//         field: 'status_akun',
//         header: 'Status Akun',
//     },
//     {
//         field: 'action',
//         header: 'Action',
//     },

// ]
