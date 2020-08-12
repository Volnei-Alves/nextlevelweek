import React from "react"

import "./styles.css"
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
import api from "../../services/api"

export interface Teacher {
    id: string
    avatar: string
    bio: string
    cost: Number
    name: string
    subject: string
    whatsapp: string
}
interface teacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post("connections", {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/Hora <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}
export default TeacherItem
