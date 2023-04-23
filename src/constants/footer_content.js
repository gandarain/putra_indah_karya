const email = "putraindahkarya.konsultan@gmail.com"
const phone = "0812-6220-0965"
const links = [
  {
    id : 1,
    title : "Services",
    child : [
      {
        title : "Studi Kelayakan dan Amdal",
        link : "#appropriateness"
      },
      {
        title : "Manajemen Proyek dan manajemen Konstruksi",
        link : "#construction"
      },
      {
        title : "Studi Pengembangan Wilayah",
        link : "#development"
      },
      {
        title : "Survey Pengukuran/Topografi",
        link : "#measurement"
      },
      {
        title: "Survey Penyelidikan Tanah dan Pondasi",
        link: "#investigation"
      }
    ]
  },
  { 
    id : 2,
    title : "About Us",
    child : [
      {
        title : "Our Company",
        link : "#about"
      },
      {
        title : "Contact Us",
        link : "#contact"
      },
    ]
  },
];
const address = " Jl. Karet 12 No. 12 Simalingkar, Kel. Mangga, Kec. Medan Tuntungan"
const copyright = "2023 © Ganda Rain Panjaitan. All right reserved"
const social_media = [
  {
    id: 1,
    link: '#',
    icon: 'facebook-square'
  },
  {
    id: 2,
    link: '#',
    icon: 'instagram-alt'
  },
  {
    id: 1,
    link: '#',
    icon: 'linkedin-square'
  }
]
const footer_content = {
  email,
  phone,
  links,
  address,
  copyright,
  social_media
}

export default footer_content