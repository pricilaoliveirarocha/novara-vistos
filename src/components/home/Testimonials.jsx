import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

export const sampleReviews = [
  {
    name: 'Mariana Silva',
    context: 'Visto Americano',
    flag: '🇺🇸',
    date: 'há 2 semanas',
    avatar: '/images/client.jpg',
    text: 'Atendimento impecável. Recebi orientação em cada etapa e consegui organizar meu processo com muita segurança.',
  },
  {
    name: 'Carlos Menezes',
    context: 'Visto Canadense',
    flag: '🇨🇦',
    date: 'há 1 mês',
    avatar: '/images/client-2.jpg',
    text: 'Equipe muito atenciosa e transparente. Todas as minhas dúvidas foram respondidas com clareza e agilidade.',
  },
  {
    name: 'Renata Almeida',
    context: 'Renovação de passaporte',
    flag: '🇬🇧',
    date: 'há 2 meses',
    avatar: '/images/client-3.jpg',
    text: 'O acompanhamento fez toda a diferença. O processo ficou simples, organizado e sem surpresas.',
  },
  {
    name: 'Eduardo Ramos',
    context: 'Viagem à Europa',
    flag: '🇪🇺',
    date: 'há 3 meses',
    avatar: '/images/client-4.jpg',
    text: 'Profissionalismo do primeiro contato até a conclusão. Recomendo para quem quer viajar com tranquilidade.',
  },
]

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-label="Google" role="img">
      <path
        fill="#4285f4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.32 2.98-7.41Z"
      />
      <path
        fill="#34a853"
        d="M12 22c2.7 0 4.98-.9 6.64-2.36l-3.24-2.54c-.9.6-2.05.96-3.4.96-2.61 0-4.82-1.77-5.61-4.14H3.04v2.62A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#fbbc05"
        d="M6.39 13.92A6 6 0 0 1 6.08 12c0-.67.11-1.32.31-1.92V7.46H3.04A10 10 0 0 0 2 12c0 1.61.39 3.14 1.04 4.54l3.35-2.62Z"
      />
      <path
        fill="#ea4335"
        d="M12 5.94c1.47 0 2.79.5 3.82 1.49l2.88-2.88A9.65 9.65 0 0 0 12 2a10 10 0 0 0-8.96 5.46l3.35 2.62C7.18 7.71 9.39 5.94 12 5.94Z"
      />
    </svg>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="google-review-card">
      <div className="google-review-head">
        <img src={review.avatar} alt="" loading="lazy" />
        <div>
          <h3>{review.name}</h3>
          <p>{review.context}</p>
        </div>
        <span className="review-destination" aria-hidden="true">
          {review.flag}
        </span>
      </div>

      <div className="google-review-rating" aria-label="5 de 5 estrelas">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} aria-hidden="true" />
        ))}
        <span>{review.date}</span>
      </div>

      <p className="google-review-text">“{review.text}”</p>
    </article>
  )
}

export default function Testimonials({ reviews = sampleReviews }) {
  const [firstReview, setFirstReview] = useState(0)
  const orderedReviews = reviews.map((_, index) => reviews[(firstReview + index) % reviews.length])
  return (
    <section id="depoimentos" className="home-testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="home-testimonials-heading">
          <div>
            <p className="eyebrow">Depoimentos de quem vai mais longe</p>
            <h2 id="testimonials-title">
              Confiança que acompanha
              <br />
              <em>cada destino.</em>
            </h2>
          </div>

          <div className="google-rating-summary" aria-label="Avaliação 5 de 5">
            <GoogleMark />
            <div>
              <strong>Excelente</strong>
              <span>
                5,0 <Star aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        <div className="home-reviews-carousel">
          <button
            className="review-arrow review-arrow-prev"
            type="button"
            aria-label="Depoimento anterior"
            disabled={reviews.length < 2}
            onClick={() => setFirstReview((index) => (index - 1 + reviews.length) % reviews.length)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="google-review-grid">
            {orderedReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>

          <button
            className="review-arrow review-arrow-next"
            type="button"
            aria-label="Próximo depoimento"
            disabled={reviews.length < 2}
            onClick={() => setFirstReview((index) => (index + 1) % reviews.length)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <p className="reviews-note">
          <Quote aria-hidden="true" /> Depoimentos ilustrativos.
        </p>
      </div>
    </section>
  )
}
