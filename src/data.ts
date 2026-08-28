import { Lesson, Instructor, TimeSlot, ServiceDetailItem, GlobalService } from './types';
import kidSurferActionImg from './assets/images/kid_surfer_action_1784797541296.jpg';
import kidsSurfingCampImg from './assets/images/kids_surfing_camp_1784797523248.jpg';
import theWaveBristolImg from './assets/images/the_wave_bristol_trip_1784800173484.jpg';
import helderCoachImg from './assets/images/helder_coach_1786702791278.jpg';
import gonzagaCoachImg from './assets/images/gonzaga_coach_1786702802220.jpg';
import gersonCoachImg from './assets/images/gerson_coach_1786702814096.jpg';
import marcioCoachImg from './assets/images/marcio_coach_1786702826315.jpg';
import joaoVaraoCoachImg from './assets/images/joao_varao_coach_1786702839874.jpg';
import nunoPintoCoachImg from './assets/images/nuno_pinto_coach_1786702851696.jpg';

/**
 * Ordem oficial dos serviços da KIBER SURF SCHOOL (Fonte única global da verdade):
 * 1. Aula Avulso (Desde 30€)
 * 2. Privadas (Desde 55€)
 * 3. Packs de aulas (Desde 80€)
 * 4. Mensalidades (Desde 65€/mês)
 * 5. Aluguer (Desde 10€)
 * 6. Grupos Adultos (CTA: Saber mais)
 * 7. Grupos Crianças (CTA: Saber mais)
 * 8. Surf Trips (CTA: Calendário)
 * 9. Erasmus e Residentes (CTA: Saber mais)
 * 10. Campos de Férias (CTA: Saber mais)
 */
export const SERVICES: GlobalService[] = [
  {
    id: 'aula-avulso',
    name: 'Aula Avulso',
    priceLabel: 'Desde 30€',
    label: 'Desde 30€',
    cta: 'Saber mais',
    slug: 'aula-avulso',
    filterKey: 'aula-avulso',
    serviceKey: 'aula-avulso',
    tagline: 'Sessão individual com prancha, fato de neoprene e seguro desportivo incluídos',
    description: 'Comece cada sessão com um briefing personalizado, abordando a leitura do oceano, a segurança e os fundamentos técnicos do surf. Pratique as técnicas de remada e de subida para a prancha (pop-up) na areia antes de entrar na água, onde o seu instrutor certificado lhe dará acompanhamento contínuo e orientação prática.\n\nCada sessão é adaptada ao seu nível, objetivos e confiança no mar. Aliando equipamento de alta qualidade a uma formação especializada, esta é mais do que uma simples aula — é uma experiência profissional de surf, pensada para ajudá-lo a evoluir, ganhar confiança e desfrutar verdadeiramente das ondas.\n\nPara aproveitar ao máximo o seu tempo na água, também terá direito a 30 minutos de aluguer gratuito de equipamento após a aula.\n\nJunte-se a nós e transforme a sua estadia no Porto numa aventura de surf inesquecível.',
    badge: 'Iniciação & Aperfeiçoamento',
    image: '/avulsonovo.jpeg',
    duration: '2 Horas',
    level: 'Todos os Níveis',
    primaryLessonId: 'single-lesson',
    lessonIds: ['single-lesson'],
    techTouch: 'Análise de postura na areia e feedback instantâneo'
  },
  {
    id: 'privadas',
    name: 'Privadas',
    priceLabel: 'Desde 55€',
    label: 'Desde 55€',
    cta: 'Saber mais',
    slug: 'privadas',
    filterKey: 'private',
    serviceKey: 'privadas',
    tagline: 'Treino exclusivo 1-a-1 ou 2 pessoas com acompanhamento dedicado',
    description: 'O caminho mais rápido e focado para o teu desenvolvimento no surf. Instrutor dedicado com análise técnica personalizada e correções imediatas dentro e fora de água.',
    badge: 'Coaching 100% Exclusivo',
    image: '/Privada3.jpg',
    duration: '2 Horas',
    level: 'Todos os Níveis',
    primaryLessonId: 'private-1-person',
    lessonIds: ['private-1-person', 'private-2-people'],
    techTouch: 'Feedback em tempo real e foco pedagógico customizado'
  },
  {
    id: 'packs',
    name: 'Packs de aulas',
    priceLabel: 'Desde 80€',
    label: 'Desde 80€',
    cta: 'Saber mais',
    slug: 'packs',
    filterKey: 'pack',
    serviceKey: 'packs',
    tagline: 'Packs flexíveis de 3, 5 e 10 sessões com validade alargada',
    description: 'Packs de aulas de surf para evoluíres ao teu ritmo com horários flexíveis de acordo com as marés, acompanhamento técnico e todo o equipamento incluído.',
    badge: 'Melhor Valor',
    image: '/packs.jpg',
    duration: '3 a 10 Aulas',
    level: 'Todos os Níveis',
    primaryLessonId: 'pack-3-lessons',
    lessonIds: ['pack-3-lessons', 'pack-5-lessons', 'pack-10-lessons'],
    techTouch: 'Plano de progresso estruturado e flexibilidade de marcação'
  },
  {
    id: 'mensalidades',
    name: 'Mensalidades',
    priceLabel: 'Desde 65€/mês',
    label: 'Desde 65€/mês',
    cta: 'Saber mais',
    slug: 'mensalidades',
    filterKey: 'monthly',
    serviceKey: 'mensalidades',
    tagline: 'Planos mensais de surf e preparação física funcional',
    description: 'Faz do surf parte da tua rotina semanal com planos de treino regulares estruturados no mar e treinos funcionais de preparação física e reforço corporal.',
    badge: 'Evolução Contínua',
    image: '/mensalidade.jpg',
    duration: '1 Mês (Renovável)',
    level: 'Todos os Níveis',
    primaryLessonId: 'monthly-1x-surf',
    lessonIds: ['monthly-1x-surf', 'monthly-2x-surf', 'monthly-1x-funcional', 'monthly-1x-surf-1x-funcional', 'monthly-2x-surf-1x-funcional'],
    techTouch: 'Plano de evolução individualizado desenhado pela escola'
  },
  {
    id: 'aluguer',
    name: 'Aluguer',
    priceLabel: 'Desde 12€',
    label: 'Desde 12€',
    cta: 'Saber mais',
    slug: 'aluguer',
    filterKey: 'rental',
    serviceKey: 'aluguer',
    tagline: 'Pranchas soft e epoxy, fatos térmicos de neoprene e cacifos incluídos',
    description: 'Aluguer de equipamento de topo na Praia de Matosinhos. Pranchas soft-foam para iniciantes, pranchas duras de fibra/epoxy e fatos térmicos higienizados.',
    badge: 'Material Oficial FPS',
    image: '/storebord.png',
    duration: '2h a Vários Dias',
    level: 'Todos os Níveis',
    primaryLessonId: 'rental-combo-2h',
    lessonIds: ['rental-single-2h', 'rental-single-4h', 'rental-single-1day', 'rental-combo-2h', 'rental-combo-4h', 'rental-combo-1day'],
    techTouch: 'Fatos higienizados e aconselhamento de litragem e marés'
  },
  {
    id: 'grupos-adultos',
    name: 'Grupos Adultos',
    cta: 'Saber mais',
    slug: 'grupos-adultos',
    filterKey: 'group',
    serviceKey: 'grupos-adultos',
    tagline: 'Aulas em grupo dinâmicas com turmas niveladas',
    description: 'Aprende e evolui na companhia de outros surfistas. Turmas dinâmicas divididas rigorosamente por nível de experiência e rácio reduzido (máximo 6 alunos por treinador).',
    badge: 'Espírito de Equipa',
    image: '/picture2.jpg',
    duration: '2 Horas',
    level: 'Todos os Níveis',
    primaryLessonId: 'single-lesson',
    lessonIds: ['single-lesson', 'pack-3-lessons', 'pack-5-lessons', 'pack-10-lessons', 'surf-guide'],
    techTouch: 'Rácio reduzido e turmas niveladas por experiência'
  },
  {
    id: 'grupos-criancas',
    name: 'Grupos Crianças',
    cta: 'Saber mais',
    slug: 'grupos-criancas',
    filterKey: 'kids',
    serviceKey: 'grupos-criancas',
    tagline: 'Aulas desenhadas para os 6 aos 14 anos com foco em segurança',
    description: 'Aulas especialmente desenhadas para os mais jovens, combinando diversão, pedagogia adaptada e rácio reduzido de segurança no mar (1 treinador para 4 alunos).',
    badge: 'Kids & Teens • 6 aos 14 Anos',
    image: '/picture3.jpg',
    duration: '1h 45m',
    level: '6 aos 14 Anos',
    primaryLessonId: 'kids-surf',
    lessonIds: ['kids-surf'],
    techTouch: 'Rácio reforçado de segurança na água (1:4)'
  },
  {
    id: 'surf-trips',
    name: 'Surf Trips',
    cta: 'Calendário',
    slug: 'surf-trips',
    filterKey: 'trip',
    serviceKey: 'surf-trips',
    tagline: 'Viagens guiadas e fins de semana intensivos em piscina de ondas',
    description: 'Viagens organizadas pela equipa Kiber para os melhores picos e piscinas de ondas do mundo (The Wave Bristol) com coaching técnico e vídeo-análise.',
    badge: 'The Wave Bristol & Expedições',
    image: theWaveBristolImg,
    duration: 'Fim de Semana (3 Dias)',
    level: 'Intermédio ao Avançado',
    primaryLessonId: 'surftrip-bristol-member',
    lessonIds: ['surftrip-bristol-member', 'surftrip-bristol-general'],
    techTouch: 'Ondas mecânicas perfeitas e repetição técnica com vídeo-análise'
  },
  {
    id: 'erasmus',
    name: 'Erasmus e Residentes',
    cta: 'Saber mais',
    slug: 'erasmus',
    filterKey: 'erasmus',
    serviceKey: 'erasmus',
    tagline: 'Tarifas e condições especiais para a comunidade académica e internacional',
    description: 'Condições e tarifas exclusivas para estudantes universitários e internacionais no Porto. Treinadores multilingues e integração na vibrante comunidade Kiber.',
    badge: 'Comunidade Internacional',
    image: '/eramus.jpg',
    duration: '2 Horas',
    level: 'Todos os Níveis',
    primaryLessonId: 'erasmus-lesson-2h',
    lessonIds: ['rental-board-wetsuit-2h-erasmus', 'erasmus-lesson-2h', 'erasmus-pack-3'],
    techTouch: 'Treinadores multilingues e integração na comunidade Kiber'
  },
  {
    id: 'campos-ferias',
    name: 'Campos de Férias',
    cta: 'Saber mais',
    slug: 'campos-ferias',
    filterKey: 'camp',
    serviceKey: 'campos-ferias',
    tagline: 'Programas diários e semanais de Verão com surf, almoço e praia',
    description: 'Programas semanais e diários de Verão na Praia de Matosinhos com 2 sessões diárias de surf, almoço, surfskate, atividades didáticas e supervisão contínua (6 aos 16 anos).',
    badge: 'Campos de Férias • 6 aos 16 Anos',
    image: '/kids.png',
    duration: 'Diário ou 1 Semana',
    level: '6 aos 16 Anos',
    primaryLessonId: 'camp-week-lunch',
    lessonIds: ['camp-week-lunch', 'camp-week-no-lunch', 'camp-day-lunch', 'camp-day-no-lunch'],
    techTouch: 'Supervisão pedagógica 100% permanente por monitores credenciados'
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'single-lesson',
    category: 'group',
    title: 'Aula Avulsa / 1 Lesson',
    description: 'Sessão com briefing personalizado, técnica na areia e acompanhamento contínuo no mar. Inclui 30 minutos de aluguer gratuito de equipamento após a aula.',
    price: 30,
    duration: '2 Horas',
    capacity: 'Máximo 6 alunos por instrutor',
    includes: [
      'Prancha de Surf de alta flutuação',
      'Fato de Neoprene térmico flexível',
      'Seguro Desportivo obrigatório',
      'Instrutor certificado FPS (Federação Portuguesa de Surf)',
      'Acesso aos balneários da escola'
    ],
    level: 'Todos os Níveis',
    image: '/avulsonovo.jpeg',
    badge: 'Avulsa / 2h',
    techTouch: 'Análise de postura na areia e feedback instantâneo'
  },
  {
    id: 'pack-3-lessons',
    category: 'pack',
    title: 'Pack 3 Aulas / Lessons',
    description: 'Pack de 3 aulas de surf em grupo. Ideal para começar a consolidar a técnica básica e ficar de pé na prancha de forma consistente.',
    price: 80,
    duration: '3 x 2 Horas',
    capacity: 'Válido por 3 meses',
    includes: [
      '3 sessões completas de 2 horas cada',
      'Agendamento de horários flexível',
      'Todo o material técnico incluído',
      'Seguro Desportivo incluído em todas as aulas',
      'Duche de água quente nos balneários'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badge: 'Validade 3 meses',
    techTouch: 'Plano de progresso inicial e flexibilidade'
  },
  {
    id: 'pack-5-lessons',
    category: 'pack',
    title: 'Pack 5 Aulas / Lessons',
    description: 'Pack de 5 aulas de surf em grupo. Excelente relação qualidade-preço para iniciar uma evolução estruturada no surf.',
    price: 100,
    duration: '5 x 2 Horas',
    capacity: 'Válido por 3 meses',
    includes: [
      '5 sessões completas de 2 horas cada',
      'Agendamento de horários flexível',
      'Pranchas e fatos premium incluídos',
      'Acompanhamento e evolução passo a passo',
      'Seguro desportivo integral em todas as aulas'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&w=800&q=80',
    badge: 'Validade 3 meses',
    techTouch: 'Ficha técnica de progresso digital personalizada'
  },
  {
    id: 'pack-10-lessons',
    category: 'pack',
    title: 'Pack 10 Aulas / Lessons',
    description: 'O pack de eleição para progresso contínuo e máxima autonomia. Desenvolva as suas capacidades físicas e leitura de mar e ondas.',
    price: 180,
    duration: '10 x 2 Horas',
    capacity: 'Válido por 5 meses',
    includes: [
      '10 sessões completas de 2 horas cada',
      'Agendamento flexível de acordo com as marés',
      'Uso livre de prancha/fato de gama superior',
      'Análise teórica de ondas e posicionamento',
      'Desconto especial de 15% em alugueres adicionais'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    badge: 'Validade 5 meses',
    techTouch: 'Acesso completo ao plano pedagógico de autonomia'
  },
  {
    id: 'private-1-person',
    category: 'private',
    title: 'Aula Privada - 1 Pessoa',
    description: 'Experiência personalizada 1 para 1 com o professor, ideal para iniciação, para crianças ou para quem já sabe surfar, mas tem objetivos específicos que pretende corrigir ou melhorar.',
    price: 65,
    duration: '2 Horas',
    capacity: 'Exclusivo (1 pessoa)',
    includes: [
      'Acompanhamento exclusivo de um instrutor dedicado',
      'Foco total na correção técnica e postura',
      'Feedback imediato onda após onda',
      'Prancha e fato adaptados ao seu biótipo',
      'Gravação em vídeo ou foto das melhores ondas'
    ],
    level: 'Todos os Níveis',
    image: '/Privada3.jpg',
    badge: '65€ - Privada / 2h',
    techTouch: 'Feedback em tempo real e foco pedagógico customizado'
  },
  {
    id: 'private-2-people',
    category: 'private',
    title: 'Aula Privada - 2 Pessoas',
    description: 'Experiência personalizada 2 para 1 com o professor, ideal para iniciação, para crianças ou para quem já sabe surfar, mas tem objetivos específicos que pretende corrigir ou melhorar. É também uma excelente opção para casais ou amigos que querem ter uma experiência mais próxima e personalizada.',
    price: 55,
    duration: '2 Horas',
    capacity: 'Exclusivo (2 pessoas)',
    includes: [
      'Instrutor privado em exclusivo para as duas pessoas',
      'Excelente equilíbrio entre diversão e foco técnico',
      'Material de surf topo de gama incluído',
      'Duche quente e vestiários privados',
      'Preço de 55€ por pessoa (55€pp)'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    badge: '55€pp - Privada / 2h',
    techTouch: 'Treino em dupla ideal para amigos, casais ou familiares'
  },
  {
    id: 'kids-surf',
    category: 'kids',
    title: 'Kiber Kids (6 aos 14 anos)',
    description: 'Aulas divertidas no mar com foco total na segurança, equilíbrio e respeito pelo oceano num ambiente super divertido.',
    price: 25,
    duration: '1h 45m',
    capacity: 'Máximo 4 crianças por instrutor',
    includes: [
      'Pranchas soft-foam de segurança acrescida',
      'Fatos térmicos extra quentes de 4/3mm',
      'Lycras coloridas de alta visibilidade',
      'Jogos didáticos e de equilíbrio na areia',
      'Fotos digitais do dia de surf'
    ],
    level: 'Todos os Níveis',
    image: kidSurferActionImg,
    badge: 'Especial Kids',
    techTouch: 'Rácio reforçado de segurança na água (1:4)'
  },
  {
    id: 'rental-single-2h',
    category: 'rental',
    title: 'Prancha OU Fato - 2h',
    description: 'Aluguer de 1 prancha de surf OU 1 fato térmico de neoprene por 2 horas na Praia de Matosinhos. Inclui leash, cera, balneários com duches quentes e cacifo privado.',
    price: 12,
    duration: '2 Horas',
    capacity: 'Prancha OU Fato',
    includes: [
      '1 Prancha de surf (soft-foam ou epoxy) OU 1 Fato de neoprene',
      'Leash de segurança e cera aplicados na prancha',
      'Acesso aos balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os bens'
    ],
    level: 'Todos os Níveis',
    image: '/storebord.png',
    badge: '12€ • 2h',
    techTouch: 'Aconselhamento especializado sobre quilhas e volume'
  },
  {
    id: 'rental-single-4h',
    category: 'rental',
    title: 'Prancha OU Fato - 4h',
    description: 'Aluguer de 1 prancha de surf OU 1 fato térmico de neoprene por 4 horas na Praia de Matosinhos. Ideal para meio dia de surf.',
    price: 18,
    duration: '4 Horas',
    capacity: 'Prancha OU Fato',
    includes: [
      '1 Prancha de surf (soft-foam ou epoxy) OU 1 Fato de neoprene',
      'Leash de segurança e cera aplicados na prancha',
      'Acesso aos balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os bens'
    ],
    level: 'Todos os Níveis',
    image: '/storebord.png',
    badge: '18€ • 4h',
    techTouch: 'Análise de marés para a sessão de meio dia'
  },
  {
    id: 'rental-single-1day',
    category: 'rental',
    title: 'Prancha OU Fato - 1 Dia',
    description: 'Aluguer de 1 prancha de surf OU 1 fato térmico de neoprene por 1 dia inteiro na Praia de Matosinhos.',
    price: 24,
    duration: '1 Dia',
    capacity: 'Prancha OU Fato',
    includes: [
      '1 Prancha de surf (soft-foam ou epoxy) OU 1 Fato de neoprene',
      'Leash de segurança e cera aplicados na prancha',
      'Acesso aos balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os bens'
    ],
    level: 'Todos os Níveis',
    image: '/storebord.png',
    badge: '24€ • 1 Dia',
    techTouch: 'Flexibilidade de utilização ao longo de todo o dia'
  },
  {
    id: 'rental-single-extra-day',
    category: 'rental',
    title: 'Prancha OU Fato - Dias Extra',
    description: 'Dias adicionais de aluguer de 1 prancha de surf OU 1 fato térmico de neoprene (18€ por dia extra).',
    price: 18,
    duration: 'Dias Extra',
    capacity: 'Prancha OU Fato',
    includes: [
      '1 Prancha de surf (soft-foam ou epoxy) OU 1 Fato de neoprene',
      'Leash de segurança e cera aplicados na prancha',
      'Acesso aos balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os bens'
    ],
    level: 'Todos os Níveis',
    image: '/storebord.png',
    badge: '18€ / dia extra',
    techTouch: 'Flexibilidade de prolongamento de aluguer'
  },
  {
    id: 'rental-combo-2h',
    category: 'rental',
    title: 'Prancha + Fato - 2h',
    description: 'Aluguer do conjunto completo de 1 prancha de surf e 1 fato térmico de neoprene por 2 horas na Praia de Matosinhos. A opção mais popular para uma sessão perfeita.',
    price: 18,
    duration: '2 Horas',
    capacity: 'Conjunto Completo',
    includes: [
      'Conjunto completo: Prancha de surf + Fato de neoprene',
      'Leash de segurança e cera aplicados na prancha',
      'Acesso aos balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os bens'
    ],
    level: 'Todos os Níveis',
    image: '/storebord.png',
    badge: '18€ • 2h',
    techTouch: 'Recomendação instantânea de marés e ventos'
  },
  {
    id: 'rental-combo-4h',
    category: 'rental',
    title: 'Prancha + Fato - 4h',
    description: 'Aluguer do conjunto completo de 1 prancha de surf e 1 fato térmico de neoprene por 4 horas (meio dia) na Praia de Matosinhos.',
    price: 24,
    duration: '4 Horas',
    capacity: 'Conjunto Completo',
    includes: [
      'Conjunto completo: Prancha de surf + Fato de neoprene',
      'Leash de segurança e cera aplicados na prancha',
      'Acesso aos balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os bens'
    ],
    level: 'Todos os Níveis',
    image: '/storebord.png',
    badge: '24€ • 4h',
    techTouch: 'Análise detalhada de marés para as duas sessões'
  },
  {
    id: 'rental-combo-1day',
    category: 'rental',
    title: 'Prancha + Fato - 1 Dia',
    description: 'Aluguer do conjunto completo de 1 prancha de surf e 1 fato térmico de neoprene por 1 dia inteiro com máxima liberdade.',
    price: 30,
    duration: '1 Dia',
    capacity: 'Conjunto Completo',
    includes: [
      'Conjunto completo: Prancha de surf + Fato de neoprene',
      'Pranchas de espuma, epoxy ou fibra disponíveis',
      'Acesso aos balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os bens'
    ],
    level: 'Todos os Níveis',
    image: '/storebord.png',
    badge: '30€ • 1 Dia',
    techTouch: 'Guia digital de picos de surf da região'
  },
  {
    id: 'rental-combo-extra-day',
    category: 'rental',
    title: 'Prancha + Fato - Dias Extra',
    description: 'Dias adicionais de aluguer do conjunto completo de 1 prancha de surf e 1 fato térmico de neoprene (24€ por cada dia extra).',
    price: 24,
    duration: 'Dias Extra',
    capacity: 'Conjunto Completo',
    includes: [
      'Conjunto completo: Prancha de surf + Fato de neoprene',
      'Leash de segurança e cera aplicados na prancha',
      'Acesso aos balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os bens'
    ],
    level: 'Todos os Níveis',
    image: '/storebord.png',
    badge: '24€ / dia extra',
    techTouch: 'Tarifa reduzida para estadias prolongadas'
  },
  {
    id: 'rental-board-wetsuit-2h-erasmus',
    category: 'erasmus',
    title: 'Prancha + Fato - 2h (ERASMUS)',
    description: 'Desconto universitário e internacional especial para estudantes ERASMUS. Pratica surf nas melhores ondas do Porto com equipamento de topo ao melhor preço.',
    price: 10,
    duration: '2 Horas',
    capacity: 'Exclusivo Erasmus / Estudantes',
    includes: [
      'Prancha de surf de espuma ou fibra',
      'Fato de neoprene térmico completo',
      'Leash de segurança e cera incluídos',
      'Requer apresentação de cartão Erasmus / estudante válido'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badge: 'ERASMUS 10€ / 2h',
    techTouch: 'Acesso à vibrante comunidade académica de surf Kiber'
  },
  {
    id: 'erasmus-lesson-2h',
    category: 'erasmus',
    title: 'Aula de Surf Erasmus (2h)',
    description: 'Aula de surf em grupo orientada por treinadores fluentes em inglês, espanhol e português. Tarifa exclusiva para estudantes internacionais.',
    price: 20,
    duration: '2 Horas',
    capacity: 'Exclusivo Erasmus / Estudantes',
    includes: [
      'Aula completa de 2 horas com instrutor credenciado',
      'Prancha e fato térmico de neoprene incluídos',
      'Seguro desportivo individual',
      'Requer apresentação de cartão Erasmus / estudante válido'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&w=800&q=80',
    badge: 'ERASMUS 20€ / 2h',
    techTouch: 'Treinadores multilingues e integração na comunidade Kiber'
  },
  {
    id: 'erasmus-pack-3',
    category: 'erasmus',
    title: 'Pack 3 Aulas Erasmus',
    description: 'Pack de 3 aulas completas de surf para estudantes internacionais durante a sua estadia no Porto. Máxima flexibilidade de horários.',
    price: 55,
    duration: '3 x 2 Horas',
    capacity: 'Válido por 3 meses (Erasmus)',
    includes: [
      '3 sessões de surf de 2 horas cada',
      'Todo o equipamento técnico e fato incluídos',
      'Seguro desportivo completo em todas as sessões',
      'Desconto especial de estudante (55€ total)'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    badge: 'ERASMUS Pack 55€',
    techTouch: 'Flexibilidade total de agendamento entre aulas'
  },

  {
    id: 'monthly-1x-surf',
    category: 'monthly',
    title: '1 x semana/week surf',
    description: 'Mensalidade prática de surf. Inclui 1 aula de surf em grupo por semana com acompanhamento próximo de instrutor certificado e equipamento completo incluído.',
    price: 65,
    duration: '1 Mês',
    capacity: '1 Aula p/ semana',
    includes: [
      '4 aulas de surf por mês orientadas por treinador',
      'Prancha de surf e fato de neoprene de alta qualidade',
      'Seguro desportivo mensal obrigatório incluído',
      'Agendamento de horários flexível conforme as marés'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    badge: 'Mensalidade 65€',
    techTouch: 'Plano de evolução individualizado desenhado pela escola'
  },
  {
    id: 'monthly-1x-funcional',
    category: 'monthly',
    title: '1 x semana/week funcional',
    description: 'Mensalidade para treino físico de surf funcional. 1 sessão semanal focada no reforço do core, equilíbrio, agilidade, remada e coordenação corporal.',
    price: 45,
    duration: '1 Mês',
    capacity: '1 Treino p/ semana',
    includes: [
      '4 treinos físicos dinâmicos focados no surf',
      'Exercícios de popup, equilíbrio, estabilidade e endurance',
      'Acompanhamento direto por treinador especializado',
      'Uso de balneários e duche após o treino'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&w=800&q=80',
    badge: 'Mensalidade 45€',
    techTouch: 'Avaliação de bio-impedância digital inicial'
  },
  {
    id: 'monthly-1x-surf-1x-funcional',
    category: 'monthly',
    title: '1 x semana/week surf + 1 x semana/week funcional',
    description: 'O equilíbrio perfeito para maximizar a sua evolução. Combina 1 aula prática de surf no mar com 1 treino físico funcional na escola todas as semanas.',
    price: 110,
    duration: '1 Mês',
    capacity: '2 Sessões p/ semana',
    includes: [
      '4 aulas completas de surf no mar por mês',
      '4 treinos de preparação física funcional focados no surf',
      'Material de surf topo de gama incluído nas aulas',
      'Seguro desportivo integral em todas as sessões'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    badge: 'Mensalidade 110€',
    techTouch: 'Dashboard digital de progresso de aptidão física e técnica'
  },
  {
    id: 'monthly-2x-surf',
    category: 'monthly',
    title: '2 x semana/week surf',
    description: 'Plano intensivo de surf para progresso muito acelerado. Desfrute de 2 aulas de surf em grupo por semana com equipamento completo e acompanhamento técnico focado.',
    price: 120,
    duration: '1 Mês',
    capacity: '2 Aulas p/ semana',
    includes: [
      '8 aulas de surf no mar por mês',
      'Equipamento completo de surf incluído em todas as aulas',
      'Seguro desportivo integral e acompanhamento contínuo',
      'Vídeo-análise pontual de postura e manobras na areia',
      'Acesso total aos balneários da escola de surf'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badge: 'Mensalidade 120€',
    techTouch: 'Feedback técnico mensal com base em captação de imagem'
  },
  {
    id: 'monthly-2x-surf-1x-funcional',
    category: 'monthly',
    title: '2 x semana/week surf + 1 x semana/week funcional',
    description: 'O programa de alto rendimento por excelência da Kiber Surf School. Ideal para surfistas empenhados em elevar a sua forma física e técnica a um novo patamar.',
    price: 150,
    duration: '1 Mês',
    capacity: '3 Sessões p/ semana',
    includes: [
      '8 aulas de surf completas no mar de Matosinhos',
      '4 sessões de treino funcional focado no surf',
      'Material de surf completo e seguro desportivo incluídos',
      'Prioridade máxima no agendamento semanal de sessões',
      'Duches de água quente e cacifo privado incluídos'
    ],
    level: 'Todos os Níveis',
    image: 'https://images.unsplash.com/photo-1543096222-72de739f7917?auto=format&fit=crop&w=800&q=80',
    badge: 'Mensalidade 150€',
    techTouch: 'Acesso total a planos pedagógicos avançados e de autonomia'
  },
  {
    id: 'surf-guide',
    category: 'guide',
    title: 'Surf Guide / Guia Local',
    description: 'Explora os melhores picos de Matosinhos e da região Norte com o nosso guia local. Indicado para surfistas experientes que querem apanhar as melhores ondas nos picos certos.',
    price: 75,
    duration: 'Meio Dia',
    capacity: 'Até 4 pessoas',
    includes: [
      'Transporte de ida e volta da escola até aos picos selecionados',
      'Guia local certificado com conhecimento profundo das praias',
      'Briefing de segurança detalhado (correntes, canais e fundos)',
      'Material técnico premium opcional incluído se necessário',
      'Seguro de acidentes pessoais desportivo completo'
    ],
    level: 'Intermédio',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badge: 'Surf Guide',
    techTouch: 'Estudo em tempo real de ventos e swell para picos isolados'
  },
  {
    id: 'camp-week-lunch',
    category: 'camp',
    title: 'Campo de Férias - Semana Completa (com almoço)',
    description: 'A experiência completa de Verão para crianças e jovens (6 aos 16 anos). Inclui 5 dias de aulas de surf, atividades na praia, surfskate, teoria e almoço diário completo.',
    price: 220,
    duration: '1 Semana (Segunda a Sexta - 09h às 18h)',
    capacity: 'Rácio reforçado 1:5 alunos',
    includes: [
      'Aulas de surf diárias (manhã e tarde) com treinadores certificados FPS',
      'Almoço completo saudável em restaurante parceiro + lanches e águas',
      'Todo o equipamento técnico (prancha soft-board e fato térmico)',
      'Seguro desportivo integral e supervisão contínua',
      'Atividades de surfskate, treino funcional e educação sobre o mar'
    ],
    level: 'Todos os Níveis',
    image: '/kids.png',
    badge: 'Semana c/ Almoço - 220€',
    techTouch: 'Supervisão pedagógica constante e vídeos recordação'
  },
  {
    id: 'camp-week-no-lunch',
    category: 'camp',
    title: 'Campo de Férias - Semana Completa (sem almoço)',
    description: 'Programa semanal de 5 dias com 2 aulas diárias de surf e atividades para jovens. Os alunos trazem a sua própria refeição de almoço.',
    price: 180,
    duration: '1 Semana (Segunda a Sexta - 09h às 18h)',
    capacity: 'Rácio reforçado 1:5 alunos',
    includes: [
      'Aulas de surf diárias (manhã e tarde) com equipa certificada',
      'Todo o equipamento de surf (prancha e fato térmico) incluído',
      'Seguro desportivo e supervisão durante a refeição trazida de casa',
      'Atividades recreativas na areia e aulas de técnica de surf'
    ],
    level: 'Todos os Níveis',
    image: '/kids.png',
    badge: 'Semana s/ Almoço - 180€',
    techTouch: 'Iniciação segura às ondas e dinâmicas de grupo'
  },
  {
    id: 'camp-day-lunch',
    category: 'camp',
    title: 'Campo de Férias - Dia Inteiro (com almoço)',
    description: 'Um dia intenso e inesquecível de praia e surf para crianças. Inclui 2 sessões de surf, almoço em restaurante e atividades supervisionadas.',
    price: 55,
    duration: '1 Dia (09h às 18h)',
    capacity: 'Sujeito à lotação do grupo',
    includes: [
      '2 Aulas de surf completas no mar de Matosinhos',
      'Almoço completo e lanche da tarde em restaurante parceiro',
      'Todo o equipamento de surf e fato de neoprene higienizado',
      'Seguro desportivo individual do dia'
    ],
    level: 'Todos os Níveis',
    image: '/kids.png',
    badge: 'Dia Inteiro c/ Almoço - 55€',
    techTouch: 'Acompanhamento total dentro e fora de água'
  },
  {
    id: 'camp-day-no-lunch',
    category: 'camp',
    title: 'Campo de Férias - Dia Inteiro (sem almoço)',
    description: 'Participação num dia do Campo de Férias com 2 aulas de surf e supervisão, trazendo o seu próprio almoço.',
    price: 45,
    duration: '1 Dia (09h às 18h)',
    capacity: 'Sujeito à lotação do grupo',
    includes: [
      '2 Aulas de surf no mar de Matosinhos (manhã e tarde)',
      'Todo o equipamento de surf (prancha e fato) incluído',
      'Seguro desportivo individual do dia',
      'Supervisão durante o horário de almoço e descansos'
    ],
    level: 'Todos os Níveis',
    image: '/kids.png',
    badge: 'Dia Inteiro s/ Almoço - 45€',
    techTouch: 'Atividades lúdicas e desportivas adaptadas'
  },
  {
    id: 'surftrip-bristol-member',
    category: 'trip',
    title: 'The Wave Surf Trip - Bristol (Kiber Members)',
    description: 'Express Evolution Weekend no The Wave em Bristol (Piscina de Ondas artificial). Inclui 3 sessões de surf com coaching, alojamento on-site, surfskate, transfers, pequeno-almoço, almoço e análise em vídeo. Desconto exclusivo para membros Kiber.',
    price: 500,
    duration: '11 a 13 de Setembro (Fim de semana completo)',
    capacity: 'Vagas Estritamente Limitadas',
    includes: [
      'Alojamento nas instalações eco-lodge do The Wave Bristol',
      '3 Sessões intensivas de surf com coaching técnico exclusivo',
      'Treino prático de Surfskate e biomecânica de rotação',
      'Transfers de e para o Aeroporto em Bristol',
      'Pequeno-almoço e almoço incluídos todos os dias',
      'Análise detalhada em vídeo (Video Analysis) de cada onda'
    ],
    level: 'Todos os Níveis',
    image: theWaveBristolImg,
    badge: 'Kiber Members - 500€',
    techTouch: 'Ondas mecânicas perfeitas e repetição técnica para evolução acelerada'
  },
  {
    id: 'surftrip-bristol-general',
    category: 'trip',
    title: 'The Wave Surf Trip - Bristol (Preço Geral)',
    description: 'Express Evolution Weekend no The Wave em Bristol (Piscina de Ondas artificial). Inclui 3 sessões de surf com coaching, alojamento on-site, surfskate, transfers, pequeno-almoço, almoço e análise em vídeo.',
    price: 625,
    duration: '11 a 13 de Setembro (Fim de semana completo)',
    capacity: 'Vagas Estritamente Limitadas',
    includes: [
      'Alojamento nas instalações eco-lodge do The Wave Bristol',
      '3 Sessões intensivas de surf com coaching técnico exclusivo',
      'Treino prático de Surfskate e biomecânica de rotação',
      'Transfers de e para o Aeroporto em Bristol',
      'Pequeno-almoço e almoço incluídos todos os dias',
      'Análise detalhada em vídeo (Video Analysis) de cada onda'
    ],
    level: 'Todos os Níveis',
    image: theWaveBristolImg,
    badge: 'Preço Geral - 625€',
    techTouch: 'Ondas mecânicas perfeitas e repetição técnica para evolução acelerada'
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'coach-helder',
    name: 'Helder',
    role: 'Co-Fundador & Head Coach',
    specialty: 'Surf de Alta Performance, Leitura de Mar & Formação Técnica',
    bio: 'Com mais de duas décadas dedicadas ao surf e aos desportos de deslize, o Helder é a alma e a visão da Kiber Surf School. Treinador credenciado com vasta experiência pedagógica, foca-se na evolução consistente e na leitura inteligente das ondas de Matosinhos.',
    rating: 5.0,
    image: helderCoachImg,
    languages: ['Português', 'Inglês', 'Espanhol']
  },
  {
    id: 'coach-gonzaga',
    name: 'Gonzaga',
    role: 'Treinador de Surf & Video Coach',
    specialty: 'Vídeo-Análise Biomecânica, Aperfeiçoamento de Manobras e Competição',
    bio: 'Especialista em análise postural e técnica de manobras críticas. O Gonzaga alia a experiência dentro de água a uma capacidade única de desconstruir cada movimento em vídeo, acelerando a transição do nível intermédio para o avançado.',
    rating: 4.9,
    image: gonzagaCoachImg,
    languages: ['Português', 'Inglês']
  },
  {
    id: 'coach-gerson',
    name: 'Gerson',
    role: 'Treinador de Surf & Surfskate Specialist',
    specialty: 'Surfskate em Terra, Equilíbrio Postural & Dinâmica de Curvas',
    bio: 'Apaixonado pela biomecânica do surf e pelo treino em surfskate. O Gerson desenvolve a memória muscular dos alunos em terra firme, garantindo que a entrada na água e a geração de velocidade se tornem instintivas e fluídas.',
    rating: 4.9,
    image: gersonCoachImg,
    languages: ['Português', 'Inglês', 'Espanhol']
  },
  {
    id: 'coach-marcio',
    name: 'Márcio',
    role: 'Treinador de Surf & Coordenador Kids / Juvenis',
    specialty: 'Iniciação Pedagógica, Surf Kids & Campos de Férias',
    bio: 'Com enorme empatia e rigor na segurança aquática, o Márcio é a referência para quem dá os primeiros passos no surf e para os alunos dos nossos campos de férias. Faz de cada aula uma experiência divertida, segura e motivadora.',
    rating: 5.0,
    image: marcioCoachImg,
    imagePosition: 'center 8%',
    languages: ['Português', 'Inglês', 'Francês']
  },
  {
    id: 'coach-joao-varao',
    name: 'João Varão',
    role: 'Treinador de Surf & Especialista em Salvamento Aquático',
    specialty: 'Segurança no Mar, Gestão de Correntes & Aulas Privadas Intensivas',
    bio: 'Conhecedor profundo do mar de Matosinhos, o João Varão destaca-se pela atenção ao detalhe e pela confiança que transmite. Especialista em adaptar o treino às necessidades e ritmo de cada aluno em sessões personalizadas.',
    rating: 4.9,
    image: joaoVaraoCoachImg,
    imagePosition: 'center 15%',
    languages: ['Português', 'Inglês']
  },
  {
    id: 'coach-nuno-pinto',
    name: 'Nuno Pinto',
    role: 'Treinador de Surf & Preparador Físico',
    specialty: 'Condicionamento Específico de Surf, Mobilidade & Resistência',
    bio: 'Focado na preparação atlética e na longevidade desportiva dos surfistas. O Nuno combina treinos de remada, flexibilidade e força funcional com técnicas de surf para maximizar o rendimento e prevenir lesões no mar.',
    rating: 4.9,
    image: nunoPintoCoachImg,
    languages: ['Português', 'Inglês']
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    name: 'Catarina Martins',
    role: 'Aluna de Grupo',
    comment: 'Excelente escola! Tinha pavor de ir para o fundo e o João deu-me uma segurança fantástica. Consegui levantar-me na minha segunda aula regular. Recomendo imenso o método deles.',
    rating: 5,
    date: 'Há 1 semana'
  },
  {
    id: 'rev-2',
    name: 'Michael Schmidt',
    role: 'Turista (Alemanha)',
    comment: 'The best rental and lesson experience in Matosinhos. The coaching was a game-changer for my stance correction. Very professional gears and amazing hot showers afterwards.',
    rating: 5,
    date: 'Há 3 semanas'
  },
  {
    id: 'rev-3',
    name: 'Afonso Pereira',
    role: 'Pai do Tomás (Kiber Kids)',
    comment: 'O meu filho de 8 anos adora a Raíssa! Elas ensinam brincando mas com imensa disciplina sobre o respeito pelas correntes e outros surfistas. Segurança total de 100%.',
    rating: 5,
    date: 'Há 1 mês'
  }
];

export const TIME_SLOTS: TimeSlot[] = [
  { time: '09:00 - 11:00', tideState: 'Vazando', suitability: 'Excelente para Iniciantes (Ondas suaves)', isAvailable: true },
  { time: '11:15 - 13:15', tideState: 'Maré Baixa', suitability: 'Excelente para Prática de Posição / Areia', isAvailable: true },
  { time: '14:30 - 16:30', tideState: 'Enchendo', suitability: 'Nível Intermédio (Ondas com boa parede)', isAvailable: true },
  { time: '17:00 - 19:00', tideState: 'Maré Alta', suitability: 'Maré Cheia - Excelente para evolução no Outside', isAvailable: true }
];

export const FAQS = [
  {
    question: 'O que preciso de levar para a minha primeira aula?',
    answer: 'Apenas uma toalha de praia, protetor solar resistente à água, fato de banho ou biquíni para vestir por baixo do fato de neoprene, e muita energia! Nós fornecemos a prancha ideal, o fato térmico completo e os instrutores credenciados.'
  },
  {
    question: 'Nunca surfei antes. Posso participar nas aulas de grupo?',
    answer: 'Claro que sim! A esmagadora maioria dos nossos alunos começa do absoluto zero. Adaptamos as pranchas e dividimos os grupos na areia por níveis, garantindo que progrides ao teu ritmo, sem pressão ou medos.'
  },
  {
    question: 'Onde se localiza exatamente a escola na Praia de Matosinhos?',
    answer: 'Estamos sediados numa área privilegiada da Praia de Matosinhos, mesmo em frente ao mar, no paredão principal com acesso direto ao areal. O ponto de encontro exato e indicações de acesso são enviados na confirmação de reserva digital.'
  },
  {
    question: 'Como funciona o sistema de pagamentos de agendamentos?',
    answer: 'Podes selecionar o tipo de aula, dia e hora preferida. No checkout simulated, aceitamos pagamento rápido por MBWay (o mais usado em Portugal), Cartão de Crédito ou Entidade/Referência Multibanco. Recebes de imediato um comprovativo e cupão de acesso.'
  },
  {
    question: 'O que acontece em caso de más condições meteorológicas ou sem ondas?',
    answer: 'Se o mar estiver perigoso ou sem ondulação de todo, entraremos em contacto para reagendar a aula sem qualquer custo extra ou emitiremos um voucher digital 100% reembolsável.'
  }
];

export const SERVICE_DETAILS: Record<string, ServiceDetailItem> = {
  'aula-avulso': {
    id: 'aula-avulso',
    serviceKey: 'aula-avulso',
    categoryBadge: 'Aulas de Surf • Sessão Individual',
    title: 'Aula Avulsa de Surf',
    tagline: 'Sessão individual com prancha, fato de neoprene e seguro desportivo incluídos',
    description: 'Comece cada sessão com um briefing personalizado, abordando a leitura do oceano, a segurança e os fundamentos técnicos do surf. Pratique as técnicas de remada e de subida para a prancha (pop-up) na areia antes de entrar na água, onde o seu instrutor certificado lhe dará acompanhamento contínuo e orientação prática.\n\nCada sessão é adaptada ao seu nível, objetivos e confiança no mar. Aliando equipamento de alta qualidade a uma formação especializada, esta é mais do que uma simples aula — é uma experiência profissional de surf, pensada para ajudá-lo a evoluir, ganhar confiança e desfrutar verdadeiramente das ondas.\n\nPara aproveitar ao máximo o seu tempo na água, também terá direito a 30 minutos de aluguer gratuito de equipamento após a aula.\n\nJunte-se a nós e transforme a sua estadia no Porto numa aventura de surf inesquecível.',
    duration: '2 Horas por aula',
    level: 'Todos os Níveis',
    priceDisplay: 'Desde 30€',
    image: '/avulsonovo.jpeg',
    includes: [
      'Prancha de Surf adequada ao teu nível e peso',
      'Fato térmico de neoprene (4/3mm) higienizado',
      'Instrutor certificado pela Federação Portuguesa de Surf',
      'Seguro desportivo de acidentes pessoais incluído',
      '30 minutos de aluguer gratuito de equipamento após a aula',
      'Acesso a balneários, cacifos e duches de água quente'
    ],
    techTouch: 'Análise de postura e posicionamento na areia antes da entrada no mar',
    plans: [
      { id: 'single-lesson', label: 'Aula avulsa / ', boldLabel: '1 lesson (2h)', detail: '(inclui material e seguro)', price: '30€', priceNum: 30 },
      { id: 'pack-3-lessons', label: 'Pack ', boldLabel: '3 aulas / lessons', detail: '(validade 3 meses)', price: '80€', priceNum: 80 },
      { id: 'pack-5-lessons', label: 'Pack ', boldLabel: '5 aulas / lessons', detail: '(validade 3 meses)', price: '100€', priceNum: 100 }
    ],
    highlights: [
      { title: 'Treinadores Certificados FPS', desc: 'Metodologia testada para aprender com rapidez e máxima segurança.' },
      { title: 'Rácio Reduzido', desc: 'Máximo de 6 alunos por instrutor para garantir acompanhamento personalizado.' }
    ]
  },
  'privadas': {
    id: 'privadas',
    serviceKey: 'privadas',
    categoryBadge: 'Coaching Privado • 100% Exclusivo',
    title: 'Aulas Privadas & Coaching',
    tagline: 'Atenção 100% personalizada e evolução técnica acelerada',
    description: '### 1 pessoa\n\nExperiência personalizada **1 para 1 com o professor**, ideal para iniciação, para crianças ou para quem já sabe surfar, mas tem objetivos específicos que pretende corrigir ou melhorar.\n\n### 2 pessoas\n\nExperiência personalizada **2 para 1 com o professor**, ideal para iniciação, para crianças ou para quem já sabe surfar, mas tem objetivos específicos que pretende corrigir ou melhorar.\n\nÉ também uma excelente opção para **casais ou amigos que querem ter uma experiência mais próxima e personalizada**.',
    duration: '2 Horas',
    level: 'Todos os Níveis (Iniciação a Competição)',
    priceDisplay: 'Desde 55€ / pessoa',
    image: '/Privada (2).jpg.jpeg',
    images: [
      '/Privada (2).jpg.jpeg',
      '/Privada.jpg.jpeg',
      '/Privada3.jpg.jpeg'
    ],
    includes: [
      'Instrutor dedicado em regime de exclusividade total',
      'Material técnico de alta gama à escolha (soft-board, epoxy ou fibra)',
      'Fato de neoprene térmico flexível de última geração',
      'Seguro desportivo integral e cacifo privado incluído',
      'Análise biomecânica personalizada e feedback de manobras'
    ],
    techTouch: 'Vídeo-análise opcional com desaceleração de frames e correção de postura',
    plans: [
      { id: 'private-1-person', label: 'Aula Privada ', boldLabel: '1 pessoa / 1 person', detail: '(exclusivo)', price: '65€', priceNum: 65 },
      { id: 'private-2-people', label: 'Aula Privada ', boldLabel: '2 pessoas / 2 people', detail: '(55€ por pessoa)', price: '110€', priceNum: 110 }
    ],
    highlights: [
      { title: '100% Foco no Teu Objetivo', desc: 'Correção de erros em tempo real e escolha das melhores ondas da maré.' },
      { title: 'Flexibilidade Total de Horário', desc: 'Escolhe o momento ideal de acordo com a tua disponibilidade e condições do mar.' }
    ]
  },
  'packs': {
    id: 'packs',
    serviceKey: 'packs',
    categoryBadge: 'Aulas de Surf • Packs Económicos',
    title: 'Packs de Aulas de Surf',
    tagline: 'Packs flexíveis de 3, 5 e 10 sessões com validade alargada',
    description: 'Packs de aulas de surf para evoluíres ao teu ritmo na Praia de Matosinhos. Horários flexíveis adaptados às marés, acompanhamento técnico contínuo e todo o equipamento incluído com validade até 5 meses.\n\n**Cada aula tem 90 minutos.**\n\n**Está incluído:**\n\n* Prancha\n* Fato de neoprene\n* Treinador\n* Seguro',
    duration: '3 a 10 Aulas (2h cada)',
    level: 'Todos os Níveis',
    priceDisplay: 'Desde 80€',
    image: '/packs.jpg',
    includes: [
      'Aulas de surf completas de 2 horas na Praia de Matosinhos',
      'Prancha de surf adequada e fato de neoprene higienizado incluídos',
      'Seguro desportivo individual para cada sessão',
      'Instrutores credenciados pela Federação Portuguesa de Surf',
      'Acesso completo a balneários, duches quentes e cacifos'
    ],
    techTouch: 'Acompanhamento progressivo e validação de etapas de aprendizagem',
    plans: [
      { id: 'pack-3-lessons', label: 'Pack ', boldLabel: '3 aulas / lessons', detail: '(validade 3 meses)', price: '80€', priceNum: 80 },
      { id: 'pack-5-lessons', label: 'Pack ', boldLabel: '5 aulas / lessons', detail: '(validade 3 meses)', price: '100€', priceNum: 100 },
      { id: 'pack-10-lessons', label: 'Pack ', boldLabel: '10 aulas / lessons', detail: '(validade 5 meses)', price: '180€', priceNum: 180 }
    ],
    highlights: [
      { title: 'Máxima Poupança', desc: 'Tarifa reduzida por aula mantendo todos os benefícios do método Kiber.' },
      { title: 'Validade Alargada', desc: 'Até 5 meses de validade para gerires os teus agendamentos com total calma.' }
    ]
  },
  'mensalidades': {
    id: 'mensalidades',
    serviceKey: 'mensalidades',
    categoryBadge: 'Treino Regular • Planos Mensais',
    title: 'Mensalidades de Surf & Funcional',
    tagline: 'Treinos regulares semanais para uma evolução consistente',
    description: 'Programa dirigido a quem reside no Porto há pelo menos 3 meses e tem como objetivo melhorar e evoluir a sua técnica de surf.\n\nOs treinos decorrem em dias e horários fixos e são acompanhados por treinadores de alto rendimento.\n\nÉ ideal para quem vive no Porto e quer evoluir no surf, mas também para quem pretende fazer parte da comunidade da KIBER SURF SCHOOL.',
    duration: '1 Mês (Renovável)',
    level: 'Todos os Níveis',
    priceDisplay: 'Desde 45€ / mês',
    image: '/mensalidade.jpg',
    includes: [
      'Aulas de surf e/ou treinos funcionais semanais',
      'Todo o material técnico (pranchas e fatos) incluído',
      'Seguro desportivo mensal completo',
      'Acesso aos balneários e cacifos da escola',
      'Flexibilidade de marcação de horários'
    ],
    techTouch: 'Plano de evolução trimestral e acompanhamento por head coach',
    plans: [
      { id: 'monthly-1x-funcional', label: '1 x semana ', boldLabel: 'treino funcional', detail: '(4 treinos/mês)', price: '45€', priceNum: 45 },
      { id: 'monthly-1x-surf', label: '1 x semana ', boldLabel: 'surf no mar', detail: '(4 aulas/mês)', price: '65€', priceNum: 65 },
      { id: 'monthly-1x-surf-1x-funcional', label: '1x surf + 1x funcional ', boldLabel: 'plano misto', detail: '(8 sessões/mês)', price: '110€', priceNum: 110 },
      { id: 'monthly-2x-surf', label: '2 x semana ', boldLabel: 'surf intensivo', detail: '(8 aulas/mês)', price: '120€', priceNum: 120 },
      { id: 'monthly-2x-surf-1x-funcional', label: '2x surf + 1x funcional ', boldLabel: 'alta performance', detail: '(12 sessões/mês)', price: '150€', priceNum: 150 }
    ],
    highlights: [
      { title: 'Evolução Contínua', desc: 'Consolidação de técnica, resistência física e leitura de mar semana após semana.' },
      { title: 'Comunidade Kiber', desc: 'Ambiente saudável de convívio, treinos em grupo e partilha de ondas.' }
    ]
  },
  'aluguer': {
    id: 'aluguer',
    serviceKey: 'aluguer',
    categoryBadge: 'Aluguer de Equipamento • Praia de Matosinhos',
    title: 'Aluguer de Equipamento',
    tagline: 'Pranchas e fatos técnicos na Praia de Matosinhos',
    description: 'Desfruta das ondas ao teu ritmo com material de qualidade superior na Praia de Matosinhos. Pranchas de alta flutuação soft-foam para iniciantes, pranchas duras de epoxy/fibra de performance e fatos térmicos de neoprene higienizados.\n\nEscolhe a opção ideal para a tua sessão com total flexibilidade de horários.',
    duration: '2h a Vários Dias',
    level: 'Todos os Níveis',
    priceDisplay: 'Desde 12€',
    image: '/fato-prancha.png',
    includes: [
      'Material selecionado e ajustado ao teu nível e peso',
      'Leash de segurança e cera aplicada na prancha',
      'Acesso a balneários e duches de água quente',
      'Cacifo privado gratuito para guardar os teus pertences'
    ],
    techTouch: 'Fatos térmicos higienizados e aconselhamento técnico de marés',
    plans: [
      { id: 'rental-single-2h', label: 'Prancha OU Fato • ', boldLabel: '2 horas', price: '12€', priceNum: 12 },
      { id: 'rental-single-4h', label: 'Prancha OU Fato • ', boldLabel: '4 horas', price: '18€', priceNum: 18 },
      { id: 'rental-single-1day', label: 'Prancha OU Fato • ', boldLabel: '1 dia', price: '24€', priceNum: 24 },
      { id: 'rental-single-extra-day', label: 'Prancha OU Fato • ', boldLabel: 'Dias extra', price: '18€ / dia', priceNum: 18 },
      { id: 'rental-combo-2h', label: 'Prancha + Fato • ', boldLabel: '2 horas', price: '18€', priceNum: 18 },
      { id: 'rental-combo-4h', label: 'Prancha + Fato • ', boldLabel: '4 horas', price: '24€', priceNum: 24 },
      { id: 'rental-combo-1day', label: 'Prancha + Fato • ', boldLabel: '1 dia', price: '30€', priceNum: 30 },
      { id: 'rental-combo-extra-day', label: 'Prancha + Fato • ', boldLabel: 'Dias extra', price: '24€ / dia', priceNum: 24 }
    ],
    highlights: [
      { title: 'Material Higienizado', desc: 'Fatos lavados e desinfetados após cada utilização com produtos biodegradáveis.' },
      { title: 'Aconselhamento Técnico', desc: 'Ajudamos-te a escolher a prancha com o volume certo para as ondas do dia.' }
    ]
  },
  'grupos-adultos': {
    id: 'grupos-adultos',
    serviceKey: 'grupos-adultos',
    categoryBadge: 'Método Coletivo • Praia de Matosinhos',
    title: 'Aulas de Surf em Grupos Adultos',
    tagline: 'Turmas dinâmicas niveladas por experiência e rácio reduzido',
    description: 'Aprende e evolui na companhia de outros surfistas. Turmas dinâmicas divididas rigorosamente por nível de experiência e rácio reduzido (máximo 6 alunos por treinador) na Praia de Matosinhos. Acompanhamento próximo e técnico para evolução segura.',
    duration: '2 Horas por aula',
    level: 'Iniciante ao Avançado',
    priceDisplay: 'Desde 30€',
    image: '/picture2.jpg',
    includes: [
      'Prancha de Surf adequada ao teu nível e peso',
      'Fato térmico de neoprene (4/3mm) higienizado',
      'Instrutor certificado pela Federação Portuguesa de Surf',
      'Seguro desportivo de acidentes pessoais incluído',
      'Acesso a balneários, cacifos e duches de água quente'
    ],
    techTouch: 'Análise de postura e posicionamento na areia antes da entrada no mar',
    plans: [
      { id: 'single-lesson', label: 'Aula avulsa / ', boldLabel: '1 lesson (2h)', price: '30€', priceNum: 30 },
      { id: 'pack-3-lessons', label: 'Pack ', boldLabel: '3 aulas/lessons', detail: '(validade 3 meses)', price: '80€', priceNum: 80 },
      { id: 'pack-5-lessons', label: 'Pack ', boldLabel: '5 aulas/lessons', detail: '(validade 3 meses)', price: '100€', priceNum: 100 },
      { id: 'pack-10-lessons', label: 'Pack ', boldLabel: '10 aulas/lessons', detail: '(validade 5 meses)', price: '180€', priceNum: 180 },
      { id: 'surf-guide', label: 'Surf Guide / ', boldLabel: 'Guia Local (Meio Dia)', detail: '(picos isolados)', price: '75€', priceNum: 75 }
    ],
    highlights: [
      { title: 'Treinadores Certificados FPS', desc: 'Metodologia testada para aprender com rapidez e máxima segurança.' },
      { title: 'Rácio Reduzido', desc: 'Máximo de 6 alunos por instrutor para garantir acompanhamento personalizado.' }
    ]
  },
  'grupos-criancas': {
    id: 'grupos-criancas',
    serviceKey: 'grupos-criancas',
    categoryBadge: 'Kids & Teens • 6 aos 14 Anos',
    title: 'Aulas de Surf Grupos Crianças & Teens',
    tagline: 'Aulas divertidas com segurança máxima na Praia de Matosinhos',
    description: 'Aulas especialmente desenhadas para os mais jovens (6 aos 14 anos), combinando diversão, pedagogia adaptada e rácio reduzido de segurança no mar (1 treinador para 4 alunos). Aprendem a ler as ondas, respeitar o oceano e evoluir com confiança.',
    duration: '1h 45m',
    level: '6 aos 14 Anos',
    priceDisplay: 'Desde 25€',
    image: '/picture3.jpg',
    includes: [
      'Pranchas soft-foam de segurança acrescida',
      'Fatos térmicos de neoprene flexíveis de 4/3mm',
      'Rácio máximo de 4 a 5 crianças por instrutor',
      'Seguro desportivo integral incluído',
      'Jogos didáticos e de equilíbrio na areia'
    ],
    techTouch: 'Rácio reforçado de segurança na água (1 instrutor : 4 alunos)',
    plans: [
      { id: 'kids-surf', label: 'Aula avulsa ', boldLabel: 'Kiber Kids (1h45m)', detail: '(6 aos 14 anos)', price: '25€', priceNum: 25 },
      { id: 'single-lesson', label: 'Aula regular de grupo ', boldLabel: 'Geral (2h)', detail: '(a partir dos 12 anos)', price: '30€', priceNum: 30 },
      { id: 'pack-3-lessons', label: 'Pack ', boldLabel: '3 aulas Kids', detail: '(validade 3 meses)', price: '80€', priceNum: 80 }
    ],
    highlights: [
      { title: 'Segurança em 1º Lugar', desc: 'Acompanhamento constante dentro de água e equipamentos próprios para crianças.' },
      { title: 'Desenvolvimento Motor', desc: 'Estimula o equilíbrio, foco, confiança e respeito pela natureza marítima.' }
    ]
  },
  'surf-trips': {
    id: 'surf-trips',
    serviceKey: 'surf-trips',
    categoryBadge: 'Expedição Internacional • The Wave Bristol',
    title: 'The Wave Surf Trips',
    tagline: 'Piscina de ondas de classe mundial e evolução express',
    description: 'Desenvolvido à medida para a tua evolução técnica. Um fim de semana intenso de ondas perfeitas e repetíveis na piscina de ondas de classe mundial The Wave em Bristol com vídeo-análise e coaching de alto rendimento.',
    duration: 'Fim de Semana (3 Dias)',
    level: 'Intermédio ao Avançado',
    priceDisplay: 'Desde 500€',
    image: theWaveBristolImg,
    includes: [
      'Sessões de surf garantidas na piscina The Wave Bristol',
      'Alojamento incluído em acomodação parceira eco-lodge',
      'Coaching técnico intensivo com vídeo-análise diária',
      'Transferes locais e suporte da equipa Kiber',
      'Pequeno-almoço e refeições nos dias do programa'
    ],
    techTouch: 'Repetição contínua em ondas mecânicas com gravação HD e debriefing',
    plans: [
      { id: 'surftrip-bristol-member', label: 'The Wave Bristol ', boldLabel: 'Kiber Members', detail: '(3 sessões + coaching + alojamento)', price: '500€', priceNum: 500 },
      { id: 'surftrip-bristol-general', label: 'The Wave Bristol ', boldLabel: 'Preço Geral', detail: '(3 sessões + coaching + alojamento)', price: '625€', priceNum: 625 }
    ],
    highlights: [
      { title: 'Ondas Mecânicas Perfeitas', desc: 'Frequência constante para aperfeiçoar manobras sem depender do mar.' },
      { title: 'Vídeo-Coaching Diário', desc: 'Debriefing detalhado de cada onda após as sessões com treinador pro.' }
    ]
  },
  'erasmus': {
    id: 'erasmus',
    serviceKey: 'erasmus',
    categoryBadge: 'Estudantes & Erasmus • Preços Especiais',
    title: 'Erasmus & Estudantes Residentes',
    tagline: 'Vive a cultura de surf no Porto com a comunidade internacional',
    description: 'A melhor forma de viver a cultura de surf em Portugal durante o teu semestre no Porto. Aulas dinâmicas, comunidade internacional vibrante e condições exclusivas com o teu cartão de estudante.',
    duration: '2 Horas',
    level: 'Todos os Níveis',
    priceDisplay: 'Desde 10€',
    image: '/eramus.jpg',
    includes: [
      'Prancha e fato de neoprene 4/3mm incluídos',
      'Treinadores fluentes em inglês, espanhol e português',
      'Seguro desportivo incluído em todas as sessões',
      'Acesso total aos balneários da escola'
    ],
    techTouch: 'Integração na comunidade internacional Kiber Surf Tribe',
    plans: [
      { id: 'rental-board-wetsuit-2h-erasmus', label: 'Aluguer Prancha + Fato (2h) ', boldLabel: 'Erasmus Rental', detail: '(com cartão estudante)', price: '10€', priceNum: 10 },
      { id: 'erasmus-lesson-2h', label: 'Aula de Surf Avulsa ', boldLabel: 'Erasmus Lesson (2h)', detail: '(tarifa especial)', price: '20€', priceNum: 20 },
      { id: 'erasmus-pack-3', label: 'Pack 3 Aulas ', boldLabel: 'Erasmus Pack', detail: '(validade 3 meses)', price: '55€', priceNum: 55 }
    ],
    highlights: [
      { title: 'Descontos Exclusivos', desc: 'Tarifas especiais para estudantes universitários e membros Erasmus.' },
      { title: 'Multilingual Coaches', desc: 'Aulas lecionadas em português, inglês ou espanhol para fácil compreensão.' }
    ]
  },
  'campos-ferias': {
    id: 'campos-ferias',
    serviceKey: 'campos-ferias',
    categoryBadge: 'Campos de Férias • 6 aos 16 Anos',
    title: 'Campos de Férias de Surf',
    tagline: 'A melhor aventura de Verão na Praia de Matosinhos',
    description: 'Uma semana inesquecível de surf, segurança no mar, novas amizades e muita diversão na Praia de Matosinhos. Programa completo com aulas de surf bidiárias, jogos na areia, skate/surfskate e reforço desportivo com supervisão permanente.',
    duration: '1 Semana ou Diário (09h às 18h)',
    level: '6 aos 16 Anos',
    priceDisplay: 'Desde 45€ / dia',
    image: '/kids.png',
    includes: [
      '2 sessões diárias de surf orientadas por treinadores certificados FPS',
      'Todo o equipamento técnico (pranchas soft e fatos térmicos)',
      'Seguro de acidentes pessoais e responsabilidade civil completo',
      'Supervisão pedagógica 100% permanente por monitores',
      'Acesso a balneários e instalações da escola'
    ],
    techTouch: 'Rácio de segurança de 1 treinador por 5 alunos e relatórios de progresso',
    plans: [
      { id: 'camp-day-no-lunch', label: 'Diária Avulsa ', boldLabel: 'sem Almoço', detail: '(09h às 18h - traz almoço)', price: '45€', priceNum: 45 },
      { id: 'camp-day-lunch', label: 'Diária Avulsa ', boldLabel: 'com Almoço', detail: '(09h às 18h - com almoço)', price: '55€', priceNum: 55 },
      { id: 'camp-week-no-lunch', label: 'Semana Completa ', boldLabel: 'sem Almoço', detail: '(Seg a Sex - traz almoço)', price: '180€', priceNum: 180 },
      { id: 'camp-week-lunch', label: 'Semana Completa ', boldLabel: 'com Almoço', detail: '(Seg a Sex - com almoço)', price: '220€', priceNum: 220 }
    ],
    highlights: [
      { title: 'Supervisão Total', desc: 'Monitores dedicados garantem acompanhamento permanente e ambiente seguro.' },
      { title: 'Atividades Complementares', desc: 'Surfskate, jogos de praia e teoria das correntes e segurança marítima.' }
    ]
  }
};

// Aliases for alternate slugs / keys
SERVICE_DETAILS['aulas-grupo'] = SERVICE_DETAILS['grupos-adultos'];
SERVICE_DETAILS['aulas-privadas'] = SERVICE_DETAILS['privadas'];
SERVICE_DETAILS['kids'] = SERVICE_DETAILS['grupos-criancas'];
SERVICE_DETAILS['surf-trip'] = SERVICE_DETAILS['surf-trips'];
SERVICE_DETAILS['campo-ferias'] = SERVICE_DETAILS['campos-ferias'];
SERVICE_DETAILS['packs-de-aulas'] = SERVICE_DETAILS['packs'];
SERVICE_DETAILS['erasmus-residentes'] = SERVICE_DETAILS['erasmus'];

