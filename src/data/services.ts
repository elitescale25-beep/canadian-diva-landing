import { Droplet, Eye, Hand, Scissors, Sparkles, Syringe, Waves } from 'lucide-react'

export const services = [
  {
    name: 'Soins du visage',
    text: 'Diagnostic à la loupe, nettoyage profond, extraction, masques et hydratation. Le protocole est choisi en cabine, jamais à l’avance.',
    Icon: Sparkles,
  },
  {
    name: 'Peeling',
    text: 'Peelings superficiels à moyens, dosés selon le phototype et la saison. Taches, teint terne, cicatrices d’acné.',
    Icon: Droplet,
  },
  {
    name: 'Microneedling',
    text: 'Induction de collagène pour le grain de peau, les pores dilatés et les marques laissées par l’acné.',
    Icon: Syringe,
  },
  {
    name: 'Épilation',
    text: 'Cire tiède et fil, du sourcil au corps entier. Cabine chauffée, matériel à usage unique.',
    Icon: Waves,
  },
  {
    name: 'Onglerie',
    text: 'Manucure et pédicure russes, semi-permanent, gel, réparation d’ongle abîmé.',
    Icon: Hand,
  },
  {
    name: 'Cils & sourcils',
    text: 'Extensions cil à cil, rehaussement, teinture, restructuration et laminage du sourcil.',
    Icon: Eye,
  },
  {
    name: 'Coiffure & soins capillaires',
    text: 'Coupe, couleur, brushing, lissage doux, soins du cuir chevelu et cures anti-chute.',
    Icon: Scissors,
  },
] as const

export type Service = (typeof services)[number]

export const protocols = [
  {
    name: 'Bilan de peau',
    desc: 'Lecture du teint, de l’hydratation et des zones réactives. Point de départ de tout protocole visage.',
    time: '30 min',
  },
  {
    name: 'Éclat Mimosas',
    desc: 'Peeling superficiel suivi d’un masque apaisant. Pensé pour un teint terne avant un événement.',
    time: '45 min',
  },
  {
    name: 'Collagène microneedling',
    desc: 'Séance de microneedling et sérum réparateur, en cure espacée de trois à quatre semaines.',
    time: '1 h',
  },
  {
    name: 'Hydra-profond',
    desc: 'Double nettoyage, extraction manuelle, sérum et massage drainant du visage et du cou.',
    time: '1 h 15',
  },
  {
    name: 'Rituel capillaire',
    desc: 'Diagnostic du cuir chevelu, gommage, soin vapeur et brushing de finition.',
    time: '1 h 30',
  },
] as const

export const steps = [
  {
    num: '01',
    name: 'Diagnostic',
    text: 'Chaque première visite commence par un bilan. On regarde la peau, on écoute la routine déjà en place, on écarte ce qui ne convient pas.',
  },
  {
    num: '02',
    name: 'Protocole',
    text: 'Le soin est construit sur ce bilan : intensité, produits et rythme des séances sont ajustés au phototype et à la saison.',
  },
  {
    num: '03',
    name: 'Suivi',
    text: 'Les résultats sont notés d’une séance à l’autre, avec des conseils de routine à tenir à la maison entre deux rendez-vous.',
  },
] as const

export const voices = [
  {
    quote:
      'Le bilan de peau a duré une vraie demi-heure. C’est la première fois qu’on m’explique pourquoi un peeling n’était pas indiqué en plein été.',
    name: 'Salma Benjelloun',
    detail: 'Soins du visage · Maârif',
  },
  {
    quote:
      'Trois séances de microneedling et mes marques d’acné se sont nettement estompées. Le protocole a été espacé selon ma cicatrisation, pas selon un planning.',
    name: 'Nawal Cherkaoui',
    detail: 'Microneedling · Bourgogne',
  },
  {
    quote:
      'La manucure tient un peu plus de trois semaines sans décollement, et la cabine est impeccable. Je prends rendez-vous le samedi matin.',
    name: 'Imane El Fassi',
    detail: 'Onglerie · Gauthier',
  },
] as const
