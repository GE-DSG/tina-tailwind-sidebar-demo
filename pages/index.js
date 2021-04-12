import * as React from "react";

import { useCMS, withTina, useForm, usePlugin } from "tinacms";
import { Hero, hero_template } from "../components/hero";
import { Testimonial, testimonial_template } from "../components/testimonial";
import { Blocks } from "../components/blocks";
import { Nav, NAV_FIELDS } from "../components/nav";
import { Footer, FOOTER_FIELDS } from "../components/footer";
import { Features, features_template } from "../components/features";
import { TinaModal } from "../components/modal";
import { Theme } from "../components/theme";
import HomeData from "../data/home.json";

const App = () => {
  const cms = useCMS();
  cms.plugins.remove({
    __type: "screen",
    name: "Media Manager",
  });

  const [showModal, setShowModal] = React.useState(false);

  const [data, form] = useForm({
    initialValues: HomeData,
    fields: [
      {
        name: "nav",
        label: "Navbar",
        component: "group",
        fields: NAV_FIELDS,
      },
      {
        label: "Page Sections",
        name: "blocks",
        component: "blocks",
        templates: PAGE_BLOCK_TEMPLATES,
      },
      {
        name: "footer",
        label: "Footer",
        component: "group",
        fields: FOOTER_FIELDS,
      },
    ],
    onSubmit: (values) => {
      setShowModal(true);
    },
  });

  usePlugin(form);

  return (
    <div className="App">
      <Theme>
        <Nav data={data.nav} />
        {data.blocks && <Blocks data={data.blocks} blocks={PAGE_BLOCKS} />}
        <Footer name={data.nav.wordmark.name} data={data.footer} />
      </Theme>
      {showModal && (
        <TinaModal
          data={data}
          close={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

const PAGE_BLOCKS = {
  hero: Hero,
  testimonial: Testimonial,
  features: Features,
};

const PAGE_BLOCK_TEMPLATES = {
  hero: hero_template,
  testimonial: testimonial_template,
  features: features_template,
};

const tinaOptions = { enabled: true, sidebar: true, toolbar: false };

export default withTina(App, tinaOptions);
