import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export default function FAQ() {
    return (
        <>
            <section className="bg-[#F7F7F7]">
                <div className="max-w-screen-xl mx-auto py-4">
                    <h1 className="text-center text-3xl">FAQ</h1>
                    <div className="px-4 pt-7">
                        <div className="mx-auto w-full max-w-screen-lg divide-y divide-white/5 rounded-xl bg-white/5">
                            <Disclosure as="div" className="p-6" defaultOpen={true}>
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium">
                                        What is your refund policy?
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">
                                    If you're unhappy with your purchase, we'll refund you in full.
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="p-6">
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium">
                                        Do you offer technical support?
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">No.</DisclosurePanel>
                            </Disclosure>
                        </div>
                    </div>
                    <h1 className="text-center text-3xl mt-16">Sie Sollten Wissen</h1>
                    <div className="px-4 pt-7 block md:grid md:grid-cols-2 gap-6">
                        <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5">
                            <Disclosure as="div" className="p-6" defaultOpen={true}>
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium">
                                        B2B Vapeshop
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">
                                    <p className="my-2">Suchen Sie nach einem B2B Vapeshop, der hochwertige E-Zigaretten und Zubehör zu Großhandelspreisen anbietet? Dann sind Sie bei uns genau richtig! Unser B2B Vapeshop ist Ihr Partner für den Einkauf von E-Zigaretten, E-Liquids und Vape-Zubehör in großen Mengen. Wir bieten Ihnen ein umfangreiches Sortiment an Premium-Produkten, die Ihre Kunden lieben werden.</p>
                                    <strong className="mb-2">Warum unser B2B Vapeshop?</strong>
                                    <ul className="my-5">
                                        <li className="my-1">
                                            <strong>Breites Sortiment: </strong>Von den neuesten E-Zigaretten-Modellen bis hin zu beliebten E-Liquids – unser B2B Vapeshop bietet alles, was das Vape-Herz begehrt.
                                        </li>
                                        <li className="my-1">
                                            <strong>Attraktive Preise: </strong>Profitieren Sie von exklusiven Großhandelspreisen und steigern Sie Ihre Gewinnmargen.
                                        </li>
                                        <li className="my-1">
                                            <strong>Schnelle Lieferung: </strong>Mit unserem effizienten Logistiksystem garantieren wir eine schnelle und zuverlässige Lieferung.
                                        </li>
                                        <li className="my-1">
                                            <strong>Kundensupport: </strong>Unser kompetentes Team steht Ihnen bei Fragen und Bestellungen jederzeit zur Verfügung.
                                        </li>
                                    </ul>
                                    <p className="my-3">Entdecken Sie jetzt unser Angebot und machen Sie Ihren Shop zum Vape-Paradies! Registrieren Sie sich heute in unserem B2B Vapeshop und sichern Sie sich die besten Deals.</p>
                                    <strong>Keywords: </strong>B2B Vapeshop, Großhandel E-Zigaretten, Vape Zubehör, B2B E-Liquids, Vape Großhandel
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="p-6">
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium">
                                        Was sind Vapes?
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">
                                    <p>Vapes, auch als E-Zigaretten bekannt, sind elektronische Geräte, die dazu verwendet werden, eine flüssige Substanz, bekannt als Liquid, zu verdampfen und einzuatmen. Im Gegensatz zu herkömmlichen Zigaretten enthalten Vapes keinen Tabak und erzeugen keinen Rauch, sondern lediglich einen Dampf, der inhaliert wird. Dieser Dampf kann Nikotin enthalten, muss es aber nicht – viele Nutzer bevorzugen nikotinfreie Liquids, die in einer Vielzahl von Geschmacksrichtungen erhältlich sind.
                                        Vapes bestehen in der Regel aus einer Batterie, einem Verdampfer (auch Atomizer genannt) und einem Liquid-Tank. Beim Ziehen an der E-Zigarette aktiviert die Batterie den Verdampfer, der das Liquid erhitzt und in Dampf umwandelt. Dieser Prozess wird als "Dampfen" bezeichnet und erfreut sich weltweit zunehmender Beliebtheit, sowohl bei ehemaligen Rauchern, die eine weniger schädliche Alternative suchen, als auch bei Neueinsteigern, die das Dampfen als Genussmittel nutzen. Die Vorteile von Vapes sind vielfältig: Sie bieten eine große Auswahl an Geschmacksrichtungen, sind weniger schädlich als traditionelle Zigaretten und verursachen keinen unangenehmen Rauchgeruch. Zudem können Nutzer die Nikotinstärke ihres Liquids individuell anpassen, was den schrittweisen Ausstieg aus dem Nikotinkonsum erleichtern kann.
                                        Insgesamt sind Vapes eine moderne und flexible Alternative zu herkömmlichen Zigaretten, die sich immer größerer Beliebtheit erfreut. Egal, ob Sie auf der Suche nach einer Möglichkeit sind, mit dem Rauchen aufzuhören, oder einfach nur neue Geschmacksrichtungen ausprobieren möchten – Vapes bieten eine Vielzahl von Möglichkeiten, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.</p>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="p-6">
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium">
                                        Was sind E-Liquids?
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">
                                    <p>Vapes, auch als E-Zigaretten bekannt, sind elektronische Geräte, die dazu verwendet werden, eine flüssige Substanz, bekannt als Liquid, zu verdampfen und einzuatmen. Im Gegensatz zu herkömmlichen Zigaretten enthalten Vapes keinen Tabak und erzeugen keinen Rauch, sondern lediglich einen Dampf, der inhaliert wird. Dieser Dampf kann Nikotin enthalten, muss es aber nicht – viele Nutzer bevorzugen nikotinfreie Liquids, die in einer Vielzahl von Geschmacksrichtungen erhältlich sind.
                                        Vapes bestehen in der Regel aus einer Batterie, einem Verdampfer (auch Atomizer genannt) und einem Liquid-Tank. Beim Ziehen an der E-Zigarette aktiviert die Batterie den Verdampfer, der das Liquid erhitzt und in Dampf umwandelt. Dieser Prozess wird als "Dampfen" bezeichnet und erfreut sich weltweit zunehmender Beliebtheit, sowohl bei ehemaligen Rauchern, die eine weniger schädliche Alternative suchen, als auch bei Neueinsteigern, die das Dampfen als Genussmittel nutzen. Die Vorteile von Vapes sind vielfältig: Sie bieten eine große Auswahl an Geschmacksrichtungen, sind weniger schädlich als traditionelle Zigaretten und verursachen keinen unangenehmen Rauchgeruch. Zudem können Nutzer die Nikotinstärke ihres Liquids individuell anpassen, was den schrittweisen Ausstieg aus dem Nikotinkonsum erleichtern kann.
                                        Insgesamt sind Vapes eine moderne und flexible Alternative zu herkömmlichen Zigaretten, die sich immer größerer Beliebtheit erfreut. Egal, ob Sie auf der Suche nach einer Möglichkeit sind, mit dem Rauchen aufzuhören, oder einfach nur neue Geschmacksrichtungen ausprobieren möchten – Vapes bieten eine Vielzahl von Möglichkeiten, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.</p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                        <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5">
                            <Disclosure as="div" className="p-6" defaultOpen={true}>
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium">
                                        B2B Shishashop
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">
                                    <p>Suchen Sie nach einem B2B Vapeshop, der hochwertige E-Zigaretten und Zubehör zu Großhandelspreisen anbietet? Dann sind Sie bei uns genau richtig! Unser B2B Vapeshop ist Ihr Partner für den Einkauf von E-Zigaretten, E-Liquids und Vape-Zubehör in großen Mengen. Wir bieten Ihnen ein umfangreiches Sortiment an Premium-Produkten, die Ihre Kunden lieben werden.</p>

                                    <strong>Warum unser B2B Vapeshop?</strong>

                                    Breites Sortiment: Von den neuesten E-Zigaretten-Modellen bis hin zu beliebten E-Liquids – unser B2B Vapeshop bietet alles, was das Vape-Herz begehrt.
                                    Attraktive Preise: Profitieren Sie von exklusiven Großhandelspreisen und steigern Sie Ihre Gewinnmargen.
                                    Schnelle Lieferung: Mit unserem effizienten Logistiksystem garantieren wir eine schnelle und zuverlässige Lieferung.
                                    Kundensupport: Unser kompetentes Team steht Ihnen bei Fragen und Bestellungen jederzeit zur Verfügung.
                                    Entdecken Sie jetzt unser Angebot und machen Sie Ihren Shop zum Vape-Paradies! Registrieren Sie sich heute in unserem B2B Vapeshop und sichern Sie sich die besten Deals.

                                    Keywords: B2B Vapeshop, Großhandel E-Zigaretten, Vape Zubehör, B2B E-Liquids, Vape Großhandel
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="p-6">
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium">
                                        Was ist Shisha?
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">No.</DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="p-6">
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium">
                                        Was sind Pod-Systeme?
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5">No.</DisclosurePanel>
                            </Disclosure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
