import markdownStyles from './markdown-styles.module.css'
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    // <div className={markdownStyles['markdown']}>
    //   <div className='prose'>
    //     <ReactMarkdown remarkPlugins={[remarkGfm]}>
    //       {content}
    //     </ReactMarkdown>
    //   </div>
    // </div>
    // <div className='prose'>
    // <ReactMarkdown
    //     remarkPlugins={[remarkGfm]}
    //     className={markdownStyles['markdown']}
    //     children={content}
    //   />
    // </div>
  
  
    <div className="max-w-2xl mx-auto">
      {/* <article className={markdownStyles['markdown']}>
        {content}
      </article> */}
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
