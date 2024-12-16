interface Whatsapp{
    number: string
    message?: string
}

export const envioMsg = ({number, message}: Whatsapp): void => {
    const urlWpp = `https://wa.me/${number}`
    if(message){
        let url = urlWpp + `?text=${message}`
        window.open(url, '_blank')
        return;
    }

    window.open(urlWpp, '_blank')
}