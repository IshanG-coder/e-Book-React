import {Accordion} from "./Accordion";

export const FAQ = () => {
  const faqs =[
    {
    "id":1,
    "question":"Why Should I use BookStore",
    "answer":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in consectetur molestiae, facere dolores explicabo corporis qui! Accusantium, laboriosam velit",
    },
    {
    "id":2,
    "question":"Can I access my eBook on mobile",
    "answer":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in consectetur molestiae, facere dolores explicabo corporis qui! Accusantium, laboriosam velit",
    },
    {
    "id":3,
    "question":"Do you offer refunds?",
    "answer":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in consectetur molestiae, facere dolores explicabo corporis qui! Accusantium, laboriosam velit",
    },
    {
    "id":4,
    "question":"Do you support International payments",
    "answer":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in consectetur molestiae, facere dolores explicabo corporis qui! Accusantium, laboriosam velit",
    }
]

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl  text-center  font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind ?</h1>
      <div className="" id="accordion-flush"  data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
           {faqs.map((qadata)=>(
          <Accordion key={qadata.id} faq={qadata} />
      ))}
      </div>
      
    </section>
  )
}
