import { ApiProperty } from "@nestjs/swagger"

export class Question {
    @ApiProperty({description: 'Id serial da tabela question',example: 1})
    id_question?: number


    @ApiProperty({description: 'A pergunta que será mostrada in game'})
    question: string


    @ApiProperty({description: 'Id do usuário que criou a pergunta'})
     question_id_user: number


     @ApiProperty({description: 'Id da resposta da pergunta que foi criada'})
     answers_id: number

     
     @ApiProperty({description: 'A resposta da pergunta'})
     answer: string

     @ApiProperty({description: 'Informe a posição da onde vai ficar a resposta no queezy'})
     position: string

}