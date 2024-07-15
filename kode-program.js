function cek_asisten(){
    const asisten = ["Chat GPT", "Canva", "Figma", "Capcut",
        "VSCode", "Vim", "Github Copilot", "YouTube", "MS Office",
        "Social Media"
    ];

    let irand = Math.floor(Math.random()*10);
    let nama = document.getElementById("nama").value;
    console.log(nama);
    let hasil = "Pendamping "+nama+" adalah "+asisten[irand];
    
    document.getElementById("hasil").innerHTML = hasil;
}