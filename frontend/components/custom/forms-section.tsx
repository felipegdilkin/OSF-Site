import Link from "next/link";
import { Text } from "../configs/text";

const styles = {
    sectionName: "sectionName",
	formsSection: "formsSection",
    contactBlock: "contactBlock",
    formsLeftPannel: "formsLeftPannel",
    formsRightPannel: "formsRightPannel",
    formsContainer: "formsContainer",
	formsHeading: "formsHeading",
	subHeading: "formsSubHeading",
	contactInfos: "contactInfos",
	columns: "forms-columns",
	infoContactCard: "infoContactCard",
	infoContactHeading: "infoContactHeading",
	contactList: "contactList",
	contactRow: "contactRow",
	contactLink: "contactLink",
	contactButton: "buttonOutlineArrow",
	mainLink: "formsMainLink",
};

export interface IContactInfo {
	href: string;
	label: string;
	isExternal: boolean;
}

export interface IInfoContact {
	id: number;
	heading: string;
	contactInfo: IContactInfo[];
	link?: IContactInfo | null;
}

export interface IFormsSectionProps {
	id: number;
	__component: string;
	heading: string;
	subHeading?: string | null;
	infoContact: IInfoContact[];
	link?: IContactInfo | null;
}

export function FormsSection({ data }: { data: IFormsSectionProps }) {
	if (!data) return null;

	const { heading, subHeading, infoContact, link } = data;

	const contacts = Array.isArray(infoContact) ? infoContact : [];

	return (
		<section className={styles.formsSection}>
            <div className={styles.contactBlock}>
                <div className={styles.formsLeftPannel}>
                    <Text as="h2" className={styles.formsHeading}>{heading}</Text>
                    {subHeading && <Text as="p" className={styles.subHeading}>{subHeading}</Text>}

                    <div className={styles.contactInfos}>
                        <div className={styles.columns}>
                            {contacts.map(col => (
                                <div className={styles.infoContactCard} key={col.id}>
                                    <Text as="h4" className={styles.infoContactHeading}>{col.heading}</Text>
                                    <ul className={styles.contactList}>
                                        {Array.isArray(col.contactInfo) && col.contactInfo.map((c, i) => (
                                            <li className={styles.contactRow} key={i}>
                                                <Link href={c.href} target={c.isExternal ? "_blank" : "_self"} className={styles.contactLink}>
                                                    <Text>{c.label}</Text>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    {col.link && (
                                        <div>
                                            <Link href={col.link.href} target={col.link.isExternal ? "_blank" : "_self"} className={styles.contactButton}>
                                                <Text>{col.link.label}</Text>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className={styles.formsRightPannel}>
                    <div className={styles.formsContainer}>
                        <span>Marketo Forms</span>
                    </div>
                </div>
            </div>
		</section>
	);
}

export default FormsSection;
