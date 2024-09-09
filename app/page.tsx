"use client";
import { Button, Htag, Paragraph, Tag } from "@/components";
import Rating from "@/components/Reting/Rating";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(4);
  return (
    <>
      <Htag tag="h2">Заголовок</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка primary
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка ghost
      </Button>
      <Tag size="s">Дизайн</Tag>
      <Tag color="green">-10 000 ₽</Tag>
      <Tag color="red" href="https://hh.ru">
        hh.ru
      </Tag>
      <Tag size="s" color="primary">
        Графический дизайн
      </Tag>
      <Tag color="grey">10</Tag>
      <Tag color="ghost" size="s">
        Гарантия сотрудничества
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
      <Paragraph size="large">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet iure
        maxime sapiente sunt ipsam quia? Nostrum a dolorem voluptas vel possimus
        perspiciatis iste ad, et illo aperiam, magni facilis? Consectetur?
        Quidem adipisci iste earum aut modi asperiores ipsa, veniam quibusdam
        dolorum delectus labore aliquam excepturi! Dolorem nemo ipsam quam ipsa
        aliquam, aut numquam dolorum iure incidunt pariatur unde, repellendus
        neque!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nostrum
        harum eveniet laboriosam tenetur dignissimos nihil ut similique mollitia
        temporibus maiores minima quidem, repellendus voluptatibus odio commodi
        laborum sapiente exercitationem! Explicabo aspernatur quas totam modi
        atque repudiandae velit nam dolore ab perferendis, delectus illum ut
        iure! Dolore quaerat aperiam illo. Suscipit adipisci nam excepturi totam
        officiis cupiditate modi quas nemo!
      </Paragraph>
      <Paragraph size="small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit
        pariatur voluptate assumenda dolores, facilis quod quo vitae, temporibus
        error tenetur nemo corporis voluptas ea commodi. Veniam repellat
        distinctio qui? Officia libero numquam, ipsam quasi aperiam ratione
        sapiente magni velit reprehenderit. Aliquam fugiat impedit iusto
        aspernatur illum earum cumque molestiae? Sint rem aut alias. Fugit, ut
        obcaecati. Enim, nisi modi.
      </Paragraph>
    </>
  );
}
